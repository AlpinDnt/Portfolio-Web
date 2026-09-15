import { useEffect } from 'react';

/**
 * useCanvasCursor — flowing multi-trail canvas cursor.
 * Fixed and hardened version of the owner's provided snippet:
 * no implicit globals, correct listener cleanup, DPR-aware sizing,
 * auto-disabled on touch / coarse pointers / reduced motion.
 */
const useCanvasCursor = (canvasId = 'glass-cursor') => {
  useEffect(() => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return undefined;
    if (typeof window === 'undefined') return undefined;

    const coarse = window.matchMedia?.('(pointer: coarse)').matches;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (coarse || reduced) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const config = {
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    class Oscillator {
      constructor({ phase = 0, offset = 0, frequency = 0.001, amplitude = 1 } = {}) {
        this.phase = phase;
        this.offset = offset;
        this.frequency = frequency;
        this.amplitude = amplitude;
        this._value = offset;
      }
      update() {
        this.phase += this.frequency;
        this._value = this.offset + Math.sin(this.phase) * this.amplitude;
        return this._value;
      }
      value() {
        return this._value;
      }
    }

    class Node {
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
      }
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lines = [];
    let running = true;
    let raf = 0;
    let frame = 0;

    const hue = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    class Line {
      constructor({ spring }) {
        this.spring = spring + 0.1 * Math.random() - 0.02;
        this.friction = config.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (let n = 0; n < config.size; n += 1) {
          this.nodes.push(new Node(pos.x, pos.y));
        }
      }
      update() {
        let e = this.spring;
        const head = this.nodes[0];
        head.vx += (pos.x - head.x) * e;
        head.vy += (pos.y - head.y) * e;
        for (let i = 0; i < this.nodes.length; i += 1) {
          const t = this.nodes[i];
          if (i > 0) {
            const n = this.nodes[i - 1];
            t.vx += (n.x - t.x) * e;
            t.vy += (n.y - t.y) * e;
            t.vx += n.vx * config.dampening;
            t.vy += n.vy * config.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= config.tension;
        }
      }
      draw() {
        let n = this.nodes[0].x;
        let i = this.nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(n, i);
        const last = this.nodes.length - 1;
        for (let a = 1; a < last - 1; a += 1) {
          const eNode = this.nodes[a];
          const tNode = this.nodes[a + 1];
          n = 0.5 * (eNode.x + tNode.x);
          i = 0.5 * (eNode.y + tNode.y);
          ctx.quadraticCurveTo(eNode.x, eNode.y, n, i);
        }
        const eLast = this.nodes[last - 1];
        const tLast = this.nodes[last];
        if (eLast && tLast) ctx.quadraticCurveTo(eLast.x, eLast.y, tLast.x, tLast.y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    const rebuild = () => {
      lines = [];
      for (let k = 0; k < config.trails; k += 1) {
        lines.push(new Line({ spring: 0.4 + (k / config.trails) * 0.025 }));
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      if (!running) return;
      const isDark = document.documentElement.classList.contains('dark');
      const hueValue = Math.round(hue.update());
      if (isDark) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = `hsla(${hueValue},70%,60%,0.28)`;
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.strokeStyle = `hsla(${hueValue},85%,42%,0.32)`;
      }
      ctx.lineWidth = 1;
      for (let t = 0; t < config.trails; t += 1) {
        const line = lines[t];
        line.update();
        line.draw();
      }
      frame += 1;
      raf = window.requestAnimationFrame(render);
    };

    const toPoint = (e) => {
      if (e.touches && e.touches[0]) {
        pos.x = e.touches[0].clientX;
        pos.y = e.touches[0].clientY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    };

    const onMove = (e) => {
      toPoint(e);
    };

    const onTouchStart = (e) => {
      if (e.touches?.length === 1) toPoint(e);
    };

    const onFocus = () => {
      if (!running) {
        running = true;
        render();
      }
    };

    const onBlur = () => {
      running = false;
      window.cancelAnimationFrame(raf);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        render();
      }
    };

    resize();
    rebuild();
    running = true;
    render();

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange', onVisibility);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, [canvasId]);
};

export default useCanvasCursor;

import React, { useRef, useEffect, useState } from 'react';

const SIZE = 190;
const HALF = SIZE / 2;

const FACES = [
  { name: 'React', slug: 'react', transform: `rotateY(0deg) translateZ(${HALF}px)` },
  { name: 'JavaScript', slug: 'javascript', transform: `rotateY(90deg) translateZ(${HALF}px)` },
  { name: 'Tailwind', slug: 'tailwindcss', transform: `rotateY(180deg) translateZ(${HALF}px)` },
  { name: 'HTML5', slug: 'html5', transform: `rotateY(-90deg) translateZ(${HALF}px)` },
  { name: 'CSS3', slug: 'css', transform: `rotateX(90deg) translateZ(${HALF}px)` },
  { name: 'Git', slug: 'git', transform: `rotateX(-90deg) translateZ(${HALF}px)` },
];

/**
 * Cube3D — interactive CSS-3D tech cube.
 * Auto-spins, drag to rotate, each face carries a real stack logo.
 */
export const Cube3D = () => {
  const cubeRef = useRef(null);
  const drag = useRef(null);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const rot = { x: -18, y: 24 };
    const target = { x: -18, y: 24 };
    let raf = 0;
    let idle = !reduced;
    setSpinning(!reduced);

    const tick = () => {
      if (idle) target.y += 0.25;
      rot.x += (target.x - rot.x) * 0.08;
      rot.y += (target.y - rot.y) * 0.08;
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${rot.x.toFixed(2)}deg) rotateY(${rot.y.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const el = cubeRef.current?.parentElement;
    const onDown = (e) => {
      idle = false;
      setSpinning(false);
      drag.current = { x: e.clientX ?? e.touches?.[0]?.clientX, y: e.clientY ?? e.touches?.[0]?.clientY };
    };
    const onMove = (e) => {
      if (!drag.current) return;
      const px = e.clientX ?? e.touches?.[0]?.clientX;
      const py = e.clientY ?? e.touches?.[0]?.clientY;
      if (px == null || py == null) return;
      target.y += (px - drag.current.x) * 0.45;
      target.x = Math.max(-65, Math.min(45, target.x - (py - drag.current.y) * 0.45));
      drag.current = { x: px, y: py };
    };
    const onUp = () => {
      drag.current = null;
      if (!reduced) {
        idle = true;
        setSpinning(true);
      }
    };

    el?.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      cancelAnimationFrame(raf);
      el?.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md grid place-items-center py-6 select-none">
      <div
        className="scale-[0.82] sm:scale-100 cursor-grab active:cursor-grabbing"
        style={{ perspective: '1100px', touchAction: 'pan-y' }}
        role="img"
        aria-label="Spinning 3D cube showing my tech stack logos. Drag to rotate."
      >
        <div
          ref={cubeRef}
          style={{
            width: SIZE,
            height: SIZE,
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-18deg) rotateY(24deg)',
          }}
        >
          {FACES.map((face) => (
            <div
              key={face.name}
              style={{
                position: 'absolute',
                inset: 0,
                transform: face.transform,
                backfaceVisibility: 'visible',
              }}
              className="cube-face rounded-3xl grid place-items-center"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="cube-tile w-16 h-16 rounded-2xl grid place-items-center shadow-lg">
                  <img
                    src={`https://cdn.simpleicons.org/${face.slug}`}
                    alt=""
                    loading="lazy"
                    width="36"
                    height="36"
                    className="w-9 h-9 dark:brightness-125 dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
                    draggable="false"
                  />
                </span>
                <span className="text-[11px] font-bold tracking-widest text-slate-600 dark:text-zinc-300">
                  {face.name.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-[11px] font-bold tracking-widest text-slate-400 dark:text-zinc-500">
        {spinning ? 'AUTO-SPINNING · DRAG TO TAKE OVER' : 'DRAGGING · RELEASE TO RESUME'}
      </p>
    </div>
  );
};

export default Cube3D;

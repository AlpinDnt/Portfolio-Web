import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}) => (
  <motion.div
    initial={{ opacity: 0, y, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;

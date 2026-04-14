import React, { useEffect, useRef } from 'react';
import '../styles/GhostCursor.css';

interface PointerPosition {
  x: number;
  y: number;
}

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-magnetic]';

export const GhostCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const mouseRef = useRef<PointerPosition>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ringRefPos = useRef<PointerPosition>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    document.body.classList.add('minimal-cursor-active');

    const animateRing = () => {
      ringRefPos.current.x += (mouseRef.current.x - ringRefPos.current.x) * 0.18;
      ringRefPos.current.y += (mouseRef.current.y - ringRefPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringRefPos.current.x}px, ${ringRefPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animateRing);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseDown = () => {
      ringRef.current?.classList.add('is-active');
      dotRef.current?.classList.add('is-active');
    };

    const handleMouseUp = () => {
      ringRef.current?.classList.remove('is-active');
      dotRef.current?.classList.remove('is-active');
    };

    const handlePointerOver = (event: Event) => {
      const target = event.target as Element | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        ringRef.current?.classList.add('is-hover');
      }
    };

    const handlePointerOut = (event: Event) => {
      const target = event.target as Element | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        ringRef.current?.classList.remove('is-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handlePointerOver, true);
    document.addEventListener('mouseout', handlePointerOut, true);

    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handlePointerOver, true);
      document.removeEventListener('mouseout', handlePointerOut, true);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      document.body.classList.remove('minimal-cursor-active');
    };
  }, []);

  return (
    <div className="minimal-cursor" aria-hidden="true">
      <div ref={ringRef} className="minimal-cursor-ring" />
      <div ref={dotRef} className="minimal-cursor-dot" />
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import '../styles/BloodCellCursor.css';

interface DotPosition {
  x: number;
  y: number;
  scale: number;
  element: SVGCircleElement | null;
}

interface MousePos {
  x: number;
  y: number;
}

export const BloodCellCursor: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const dotsRef = useRef<DotPosition[]>([]);
  const mouseRef = useRef<MousePos>({ x: 0, y: 0 });
  const idleTimeoutRef = useRef<NodeJS.Timeout>();
  const [isIdle, setIsIdle] = useState(false);
  const lastFrameRef = useRef<number>(0);
  
  const AMOUNT = 20;
  const SINE_DOTS = Math.floor(AMOUNT * 0.3);
  const RADIUS = 6;
  const IDLE_TIMEOUT = 150;

  const createGooFilter = () => {
    if (!svgRef.current) return;
    
    const defs = svgRef.current.querySelector('defs');
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'goo');
    
    const blur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    blur.setAttribute('in', 'SourceGraphic');
    blur.setAttribute('stdDeviation', '4');
    blur.setAttribute('result', 'blur');
    
    const colorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
    colorMatrix.setAttribute('in', 'blur');
    colorMatrix.setAttribute('mode', 'matrix');
    colorMatrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15');
    colorMatrix.setAttribute('result', 'goo');
    
    const composite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
    composite.setAttribute('in', 'SourceGraphic');
    composite.setAttribute('in2', 'goo');
    composite.setAttribute('operator', 'atop');
    
    filter.appendChild(blur);
    filter.appendChild(colorMatrix);
    filter.appendChild(composite);
    defs?.appendChild(filter);
  };

  const initializeDots = () => {
    if (!svgRef.current) return;

    dotsRef.current.forEach(dot => {
      if (dot.element?.parentNode) {
        dot.element.parentNode.removeChild(dot.element);
      }
    });
    dotsRef.current = [];

    const svg = svgRef.current;
    for (let i = 0; i < AMOUNT; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const scale = 1 - (0.04 * i);
      const size = RADIUS * scale;
      
      circle.setAttribute('r', size.toString());
      circle.setAttribute('fill', '#1f2937');
      circle.setAttribute('opacity', (0.85 - i * 0.035).toString());
      circle.setAttribute('filter', 'url(#goo)');
      
      svg.appendChild(circle);

      dotsRef.current.push({
        x: 0,
        y: 0,
        scale,
        element: circle,
      });
    }
  };

  const resetIdleTimer = () => {
    clearTimeout(idleTimeoutRef.current);
    setIsIdle(false);
    idleTimeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, IDLE_TIMEOUT);
  };

  const handleMouseMove = (e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
    resetIdleTimer();
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) {
      mouseRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      resetIdleTimer();
    }
  };

  const positionCursor = () => {
    let x = mouseRef.current.x;
    let y = mouseRef.current.y;

    dotsRef.current.forEach((dot, index) => {
      dot.x = x;
      dot.y = y;

      if (dot.element) {
        dot.element.setAttribute('cx', x.toString());
        dot.element.setAttribute('cy', y.toString());
      }

      if (!isIdle || index <= SINE_DOTS) {
        const nextDot = dotsRef.current[index + 1] || dotsRef.current[0];
        const dx = (nextDot.x - dot.x) * 0.35;
        const dy = (nextDot.y - dot.y) * 0.35;
        x += dx;
        y += dy;
      } else {
        // Idle sine wave animation
        const angleSpeed = 0.05;
        const angle = (Date.now() * 0.001 + index * 0.5) % (Math.PI * 2);
        dot.y += Math.sin(angle) * angleSpeed;
        dot.x += Math.cos(angle) * angleSpeed;
      }
    });
  };

  const animate = () => {
    positionCursor();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!svgRef.current) return;

    // Setup SVG filters
    createGooFilter();
    initializeDots();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Start animation
    lastFrameRef.current = Date.now();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.cursor = 'auto';
      clearTimeout(idleTimeoutRef.current);
    };
  }, [isIdle]);

  return (
    <svg
      ref={svgRef}
      className="blood-cell-cursor"
      width="100%"
      height="100%"
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
    >
      <defs />
    </svg>
  );
};

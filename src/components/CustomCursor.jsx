import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-target');

      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrame;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animateTrail = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, pos.x, 0.18),
        y: lerp(prev.y, pos.y, 0.18),
      }));
      animationFrame = requestAnimationFrame(animateTrail);
    };

    animationFrame = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrame);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 26 : 18)}px, ${
            trailingPos.y - (isHovered ? 26 : 18)
          }px, 0) scale(${isClicked ? 0.8 : 1})`,
          width: isHovered ? '52px' : '36px',
          height: isHovered ? '52px' : '36px',
          borderColor: isHovered ? '#00f2fe' : 'rgba(0, 242, 254, 0.45)',
          backgroundColor: isHovered ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(0, 242, 254, 0.4)' : 'none',
        }}
      />

      {/* Center Precision Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 transition-transform duration-0 ease-linear shadow-[0_0_10px_#00f2fe]"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
        }}
      />
    </div>
  );
}

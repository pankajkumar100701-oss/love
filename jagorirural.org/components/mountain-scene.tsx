"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useState } from "react";

export function MountainScene() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    setTilt({ x: (event.clientX - box.left) / box.width - 0.5, y: (event.clientY - box.top) / box.height - 0.5 });
  }

  return (
    <div className="hero-depth" onPointerMove={handlePointerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })} style={{ "--tilt-x": tilt.x, "--tilt-y": tilt.y } as CSSProperties} aria-hidden="true">
      <div className="hero-depth__orb hero-depth__orb--one" />
      <div className="hero-depth__orb hero-depth__orb--two" />
      <div className="hero-depth__ring hero-depth__ring--one" />
      <div className="hero-depth__ring hero-depth__ring--two" />
      <div className="hero-depth__line hero-depth__line--one" />
      <div className="hero-depth__line hero-depth__line--two" />
    </div>
  );
}

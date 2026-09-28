"use client";

import React, { useEffect, useRef, useState } from "react";
import { Rotate3D, Award } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
  z: number;
}

const TrophyModel3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsInteracting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = 340;
    const height = 340;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // -------------------------------------------------------------
    // 3D GEOMETRY: STELLATED INNOVATION STAR (MERKABA POLYHEDRON)
    // -------------------------------------------------------------
    const S = 62; // Outer Star Scale
    const innerRatio = 0.38; // Inner Octahedral Valley Ratio

    // 8 Outer Star Peak Vertices
    const starPeaks: [number, number, number][] = [
      [S, S, S],       // 0: + + +
      [S, -S, -S],     // 1: + - -
      [-S, S, -S],     // 2: - + -
      [-S, -S, S],     // 3: - - +
      [-S, -S, -S],    // 4: - - -
      [-S, S, S],      // 5: - + +
      [S, -S, S],      // 6: + - +
      [S, S, -S],      // 7: + + -
    ];

    // 6 Inner Valley Vertices along primary axes
    const valleyVerts: [number, number, number][] = [
      [S * innerRatio, 0, 0],   // 8:  +X
      [-S * innerRatio, 0, 0],  // 9:  -X
      [0, S * innerRatio, 0],   // 10: +Y
      [0, -S * innerRatio, 0],  // 11: -Y
      [0, 0, S * innerRatio],   // 12: +Z
      [0, 0, -S * innerRatio],  // 13: -Z
    ];

    const allVertices: [number, number, number][] = [...starPeaks, ...valleyVerts];

    // 24 Triangular Facets (3 facets per peak connecting to 3 adjacent valley vertices)
    const starFaces: [number, number, number][] = [
      // Peak 0 (+ + +): connects to +X (8), +Y (10), +Z (12)
      [0, 8, 10],
      [0, 10, 12],
      [0, 12, 8],
      // Peak 1 (+ - -): connects to +X (8), -Y (11), -Z (13)
      [1, 8, 11],
      [1, 11, 13],
      [1, 13, 8],
      // Peak 2 (- + -): connects to -X (9), +Y (10), -Z (13)
      [2, 9, 10],
      [2, 10, 13],
      [2, 13, 9],
      // Peak 3 (- - +): connects to -X (9), -Y (11), +Z (12)
      [3, 9, 11],
      [3, 11, 12],
      [3, 12, 9],
      // Peak 4 (- - -): connects to -X (9), -Y (11), -Z (13)
      [4, 9, 11],
      [4, 11, 13],
      [4, 13, 9],
      // Peak 5 (- + +): connects to -X (9), +Y (10), +Z (12)
      [5, 9, 10],
      [5, 10, 12],
      [5, 12, 9],
      // Peak 6 (+ - +): connects to +X (8), -Y (11), +Z (12)
      [6, 8, 11],
      [6, 11, 12],
      [6, 12, 8],
      // Peak 7 (+ + -): connects to +X (8), +Y (10), -Z (13)
      [7, 8, 10],
      [7, 10, 13],
      [7, 13, 8],
    ];

    // Orbital Laurels / Honor Halo (3D Ring)
    const RING_R = 96;
    const RING_SEGS = 180;

    const getHaloPoint = (theta: number): [number, number, number] => {
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);
      // Tilted orbital halo inclined at 25deg X, -40deg Z
      const x = RING_R * cos;
      const y = RING_R * sin * 0.42;
      const z = RING_R * sin * 0.90;
      return rotatePointTuple([x, y, z], 0.35, 0, -0.65);
    };

    // -------------------------------------------------------------
    // TRANSFORMATION & RENDERING
    // -------------------------------------------------------------
    let angleX = -0.32;
    let angleY = 0.45;
    let angleZ = -0.25;

    let targetAngleX = angleX;
    let targetAngleY = angleY;

    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const fov = 380;
    const cameraZ = 300;

    function rotatePointTuple(
      p: [number, number, number],
      rx: number,
      ry: number,
      rz: number
    ): [number, number, number] {
      let x = p[0];
      let y = p[1];
      let z = p[2];

      // Rotate Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotate X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Rotate Z
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);
      const x3 = x1 * cosZ - y2 * sinZ;
      const y3 = x1 * sinZ + y2 * cosZ;

      return [x3, y3, z2];
    }

    const project = (p: Point3D): Point2D => {
      const sz = p.z + cameraZ;
      const scale = fov / (sz > 1 ? sz : 1);
      return {
        x: p.x * scale + width / 2,
        y: p.y * scale + height / 2,
        z: p.z,
      };
    };

    // Directional light vector pointing top-left-front
    const light: [number, number, number] = [0.38, -0.72, 0.58];
    const lightLen = Math.sqrt(light[0] ** 2 + light[1] ** 2 + light[2] ** 2);
    light[0] /= lightLen;
    light[1] /= lightLen;
    light[2] /= lightLen;

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth idle auto-rotation when not dragging
      if (!isDragging) {
        targetAngleY += 0.007;
        targetAngleX = -0.3 + Math.sin(time * 0.7) * 0.08;
      }

      angleX += (targetAngleX - angleX) * 0.08;
      angleY += (targetAngleY - angleY) * 0.08;
      angleZ = -0.22 + Math.sin(time * 0.5) * 0.06;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Subtle warm radial background aura (Gold & Olive)
      const ambientGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        15,
        width / 2,
        height / 2,
        160
      );
      ambientGrad.addColorStop(0, "rgba(212, 175, 55, 0.12)");
      ambientGrad.addColorStop(0.45, "rgba(61, 85, 12, 0.06)");
      ambientGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 1. SAMPLE HONOR HALO POINTS
      // -------------------------------------------------------------
      const haloPoints: { p2: Point2D; z: number }[] = [];
      for (let i = 0; i < RING_SEGS; i++) {
        const th = (i / RING_SEGS) * Math.PI * 2;
        const bp = getHaloPoint(th);
        const [rx, ry, rz] = rotatePointTuple(bp, angleX, angleY, angleZ);
        const p2 = project({ x: rx, y: ry, z: rz });
        haloPoints.push({ p2, z: rz });
      }

      // Draw continuous unbroken ring arc helper
      const drawHaloArc = (
        isFront: boolean,
        color: string,
        lineWidth: number,
        shadowColor?: string,
        shadowBlur?: number
      ) => {
        const total = haloPoints.length;
        let startIndex = 0;
        for (let i = 0; i < total; i++) {
          const inReg = isFront ? haloPoints[i].z >= 0 : haloPoints[i].z <= 0;
          if (!inReg) {
            startIndex = i;
            break;
          }
        }

        let enterIdx = -1;
        for (let step = 0; step < total; step++) {
          const idx = (startIndex + step) % total;
          const inReg = isFront ? haloPoints[idx].z >= 0 : haloPoints[idx].z <= 0;
          if (inReg) {
            enterIdx = idx;
            break;
          }
        }

        if (enterIdx === -1) {
          const inReg = isFront ? haloPoints[0].z >= 0 : haloPoints[0].z <= 0;
          if (inReg) {
            ctx.beginPath();
            ctx.moveTo(haloPoints[0].p2.x, haloPoints[0].p2.y);
            for (let i = 1; i < total; i++) {
              ctx.lineTo(haloPoints[i].p2.x, haloPoints[i].p2.y);
            }
            ctx.closePath();
            if (shadowColor && shadowBlur) {
              ctx.shadowColor = shadowColor;
              ctx.shadowBlur = shadowBlur;
            }
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
          return;
        }

        const preIdx = (enterIdx - 1 + total) % total;
        ctx.beginPath();
        ctx.moveTo(haloPoints[preIdx].p2.x, haloPoints[preIdx].p2.y);
        ctx.lineTo(haloPoints[enterIdx].p2.x, haloPoints[enterIdx].p2.y);

        for (let step = 1; step < total; step++) {
          const idx = (enterIdx + step) % total;
          const inReg = isFront ? haloPoints[idx].z >= 0 : haloPoints[idx].z <= 0;
          ctx.lineTo(haloPoints[idx].p2.x, haloPoints[idx].p2.y);
          if (!inReg) {
            break;
          }
        }

        if (shadowColor && shadowBlur) {
          ctx.shadowColor = shadowColor;
          ctx.shadowBlur = shadowBlur;
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.shadowBlur = 0;
      };

      // Draw Halo Back Arc (Behind star)
      drawHaloArc(false, "rgba(212, 175, 55, 0.4)", 2.5);

      // -------------------------------------------------------------
      // 2. ROTATE & PROJECT 3D STAR VERTICES
      // -------------------------------------------------------------
      const rotated3D: Point3D[] = allVertices.map((v) => {
        const [rx, ry, rz] = rotatePointTuple(v, angleX, angleY, angleZ);
        return { x: rx, y: ry, z: rz };
      });

      const projected2D: Point2D[] = rotated3D.map(project);

      // Compute faces with normals and depth for Painter's algorithm
      const facesWithNormals = starFaces
        .map(([ia, ib, ic]) => {
          const v0 = rotated3D[ia];
          const v1 = rotated3D[ib];
          const v2 = rotated3D[ic];

          // Face normal
          const ax = v1.x - v0.x;
          const ay = v1.y - v0.y;
          const az = v1.z - v0.z;
          const bx = v2.x - v0.x;
          const by = v2.y - v0.y;
          const bz = v2.z - v0.z;
          const nx = ay * bz - az * by;
          const ny = az * bx - ax * bz;
          const nz = ax * by - ay * bx;
          const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
          const norm: [number, number, number] = [nx / len, ny / len, nz / len];

          const avgZ = (v0.z + v1.z + v2.z) / 3;
          return { ia, ib, ic, norm, avgZ };
        })
        .filter((f) => f.norm[2] > -0.1) // Backface culling
        .sort((a, b) => a.avgZ - b.avgZ);

      // -------------------------------------------------------------
      // 3. RENDER SHADED STAR FACETS
      // -------------------------------------------------------------
      ctx.lineJoin = "round";
      facesWithNormals.forEach((face) => {
        const p0 = projected2D[face.ia];
        const p1 = projected2D[face.ib];
        const p2 = projected2D[face.ic];

        // Lambertian diffuse lighting
        const diffuse = Math.max(
          0,
          face.norm[0] * light[0] + face.norm[1] * light[1] + face.norm[2] * light[2]
        );

        // Specular glint
        const specular = Math.pow(Math.max(0, -face.norm[2] * 0.5 + diffuse * 0.5), 8) * 0.35;

        // Executive Gold & Olive shading transition
        const r = Math.floor(35 + diffuse * 155 + specular * 45);
        const g = Math.floor(48 + diffuse * 130 + specular * 45);
        const b = Math.floor(16 + diffuse * 45 + specular * 20);

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();

        // Facet edge gold highlights
        ctx.strokeStyle = `rgba(212, 175, 55, ${0.25 + diffuse * 0.5})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      });

      // -------------------------------------------------------------
      // 4. DRAW HALO FRONT ARC (In front of star) WITH GOLD GLOW
      // -------------------------------------------------------------
      drawHaloArc(true, "#B48E28", 3.8, "#D4AF37", 8);
      drawHaloArc(true, "#F7E08B", 1.5);

      // -------------------------------------------------------------
      // 5. DRAW 3D ACHIEVEMENT JEWEL NODES ON HALO
      // -------------------------------------------------------------
      const NODE_COUNT = 8;
      for (let i = 0; i < NODE_COUNT; i++) {
        const th = (i / NODE_COUNT) * Math.PI * 2;
        const bp = getHaloPoint(th);
        const [rx, ry, rz] = rotatePointTuple(bp, angleX, angleY, angleZ);
        const p2 = project({ x: rx, y: ry, z: rz });

        if (rz >= -20) {
          const alpha = Math.min(1, (rz + RING_R) / (2 * RING_R) + 0.3);
          ctx.beginPath();
          ctx.arc(p2.x, p2.y, rz > 0 ? 3.5 : 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 222, 130, ${alpha})`;
          ctx.fill();
          ctx.strokeStyle = "#3D550C";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // -------------------------------------------------------------
    // INTERACTIVE MOUSE & TOUCH EVENT HANDLERS
    // -------------------------------------------------------------
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        targetAngleY += deltaX * 0.011;
        targetAngleX += deltaY * 0.011;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - lastMouseX;
        const deltaY = e.touches[0].clientY - lastMouseY;
        targetAngleY += deltaX * 0.012;
        targetAngleX += deltaY * 0.012;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center select-none w-full max-w-[280px] sm:max-w-[340px] mx-auto"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#D4AF37]/12 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#3D550C]/15 blur-2xl pointer-events-none" />
      </div>

      {/* 3D Canvas Box */}
      <div className="relative cursor-grab active:cursor-grabbing group">
        <canvas
          ref={canvasRef}
          className="relative z-10 transition-transform duration-300 drop-shadow-sm max-w-full h-auto"
        />

        {/* Hover Hint */}
        <div className="absolute bottom-2 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/90 text-slate-600 text-[10px] font-mono opacity-85 group-hover:opacity-100 transition-opacity shadow-xs">
          <Rotate3D size={12} className="text-[#3D550C]" />
          <span>Drag to rotate</span>
        </div>
      </div>
    </div>
  );
};

export default TrophyModel3D;

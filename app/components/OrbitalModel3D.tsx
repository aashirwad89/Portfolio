"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rotate3D } from "lucide-react";

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

const OrbitalModel3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = 460;
    const height = 460;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // -------------------------------------------------------------
    // 3D GEOMETRY GENERATION
    // -------------------------------------------------------------
    const phi = (1 + Math.sqrt(5)) / 2;

    // Unit Icosahedron Vertices
    const rawIcoVerts: [number, number, number][] = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ];

    const normalize = (v: [number, number, number]): [number, number, number] => {
      const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
      return [v[0] / len, v[1] / len, v[2] / len];
    };

    const unitIcoVerts = rawIcoVerts.map(normalize);

    const icoFaces: [number, number, number][] = [
      [0, 11, 5],
      [0, 5, 1],
      [0, 1, 7],
      [0, 7, 10],
      [0, 10, 11],
      [1, 5, 9],
      [5, 11, 4],
      [11, 10, 2],
      [10, 7, 6],
      [7, 1, 8],
      [3, 9, 4],
      [3, 4, 2],
      [3, 2, 6],
      [3, 6, 8],
      [3, 8, 9],
      [4, 9, 5],
      [2, 4, 11],
      [6, 2, 10],
      [8, 6, 7],
      [9, 8, 1],
    ];

    // Subdivide Icosahedron once for Geodesic Wireframe Shell
    const getMidpoint = (
      p1: [number, number, number],
      p2: [number, number, number]
    ): [number, number, number] => {
      return normalize([(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, (p1[2] + p2[2]) / 2]);
    };

    const wireVertices: [number, number, number][] = [];
    const wireEdgesSet = new Set<string>();
    const edgePairs: [number, number][] = [];

    const addWireVertex = (v: [number, number, number]): number => {
      for (let i = 0; i < wireVertices.length; i++) {
        const existing = wireVertices[i];
        const dist = Math.hypot(existing[0] - v[0], existing[1] - v[1], existing[2] - v[2]);
        if (dist < 0.001) return i;
      }
      wireVertices.push(v);
      return wireVertices.length - 1;
    };

    const addEdge = (i1: number, i2: number) => {
      const key = i1 < i2 ? `${i1}-${i2}` : `${i2}-${i1}`;
      if (!wireEdgesSet.has(key)) {
        wireEdgesSet.add(key);
        edgePairs.push([i1, i2]);
      }
    };

    icoFaces.forEach(([ia, ib, ic]) => {
      const a = unitIcoVerts[ia];
      const b = unitIcoVerts[ib];
      const c = unitIcoVerts[ic];
      const ab = getMidpoint(a, b);
      const bc = getMidpoint(b, c);
      const ca = getMidpoint(c, a);

      const iA = addWireVertex(a);
      const iB = addWireVertex(b);
      const iC = addWireVertex(c);
      const iAB = addWireVertex(ab);
      const iBC = addWireVertex(bc);
      const iCA = addWireVertex(ca);

      addEdge(iA, iAB);
      addEdge(iAB, iB);
      addEdge(iB, iBC);
      addEdge(iBC, iC);
      addEdge(iC, iCA);
      addEdge(iCA, iA);
      addEdge(iAB, iBC);
      addEdge(iBC, iCA);
      addEdge(iCA, iAB);
    });

    // Outer Geodesic Radius
    const R_WIRE = 108;
    // Inner Solid Core Radius
    const R_CORE = 62;

    // Rings Geometry
    const RING_GREEN_R = 142;
    const RING_GREEN_SEGS = 120;
    const RING_BLACK_R = 175;
    const RING_BLACK_SEGS = 120;

    // Floating Data Particles (as shown in the reference image)
    const PARTICLE_COUNT = 55;
    const particles: { x: number; y: number; z: number; size: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phiAngle = Math.acos(2.0 * v - 1.0);
      const r = 80 + Math.random() * 150;
      particles.push({
        x: r * Math.sin(phiAngle) * Math.cos(theta),
        y: r * Math.sin(phiAngle) * Math.sin(theta),
        z: r * Math.cos(phiAngle),
        size: Math.random() > 0.7 ? 3.5 : 2.2,
        alpha: 0.35 + Math.random() * 0.55,
        speed: 0.005 + Math.random() * 0.008,
      });
    }

    // -------------------------------------------------------------
    // TRANSFORMATION & RENDERING ENGINE
    // -------------------------------------------------------------
    let angleX = -0.38;
    let angleY = 0.55;
    let angleZ = -0.42;

    let targetAngleX = angleX;
    let targetAngleY = angleY;

    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const fov = 480;
    const cameraZ = 340;

    const project = (p: Point3D): Point2D => {
      const sz = p.z + cameraZ;
      const scale = fov / (sz > 1 ? sz : 1);
      return {
        x: p.x * scale + width / 2,
        y: p.y * scale + height / 2,
        z: p.z,
      };
    };

    const rotatePoint = (
      p: [number, number, number],
      rx: number,
      ry: number,
      rz: number
    ): Point3D => {
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

      return { x: x3, y: y3, z: z2 };
    };

    // Ring Inclinations:
    // Green ring is tilted ~ -35deg around Z and 68deg around X
    const getGreenRingPoint = (theta: number, rotZ: number): Point3D => {
      const basePoint: [number, number, number] = [
        RING_GREEN_R * Math.cos(theta),
        RING_GREEN_R * Math.sin(theta) * 0.42,
        RING_GREEN_R * Math.sin(theta) * 0.9,
      ];
      // Apply primary scene tilt
      return rotatePoint(basePoint, 0.25, rotZ * 0.15, -0.65);
    };

    // Black ring is tilted ~ -38deg around Z and wider inclination
    const getBlackRingPoint = (theta: number, rotZ: number): Point3D => {
      const basePoint: [number, number, number] = [
        RING_BLACK_R * Math.cos(theta),
        RING_BLACK_R * Math.sin(theta) * 0.48,
        RING_BLACK_R * Math.sin(theta) * 0.88,
      ];
      return rotatePoint(basePoint, 0.28, -rotZ * 0.12, -0.58);
    };

    // Render loop
    let time = 0;

    const render = () => {
      time += 0.014;

      // Auto-rotation when not dragging
      if (!isDragging) {
        targetAngleY += 0.006;
        targetAngleX = -0.35 + Math.sin(time * 0.6) * 0.08;
      }

      // Smooth lerp to target angle
      angleX += (targetAngleX - angleX) * 0.08;
      angleY += (targetAngleY - angleY) * 0.08;
      angleZ = -0.4 + Math.sin(time * 0.4) * 0.05;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Subtle light radial green ambient aura in canvas background
      const ambientGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        200
      );
      ambientGrad.addColorStop(0, "rgba(46, 213, 115, 0.14)");
      ambientGrad.addColorStop(0.5, "rgba(16, 185, 129, 0.06)");
      ambientGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 1. BACK HALVES OF RINGS (Z < 0)
      // -------------------------------------------------------------
      const greenRingPoints: { p3: Point3D; p2: Point2D; idx: number }[] = [];
      for (let i = 0; i <= RING_GREEN_SEGS; i++) {
        const th = (i / RING_GREEN_SEGS) * Math.PI * 2;
        const p3 = getGreenRingPoint(th, time);
        const p2 = project(p3);
        greenRingPoints.push({ p3, p2, idx: i });
      }

      const blackRingPoints: { p3: Point3D; p2: Point2D; idx: number }[] = [];
      for (let i = 0; i <= RING_BLACK_SEGS; i++) {
        const th = (i / RING_BLACK_SEGS) * Math.PI * 2;
        const p3 = getBlackRingPoint(th, time);
        const p2 = project(p3);
        blackRingPoints.push({ p3, p2, idx: i });
      }

      // Draw segments behind sphere (z < 0)
      // Green Ring Back
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 0; i < RING_GREEN_SEGS; i++) {
        const pA = greenRingPoints[i];
        const pB = greenRingPoints[i + 1];
        if (pA.p3.z < 0 && pB.p3.z < 0) {
          ctx.beginPath();
          ctx.moveTo(pA.p2.x, pA.p2.y);
          ctx.lineTo(pB.p2.x, pB.p2.y);
          ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
          ctx.lineWidth = 3.5;
          ctx.stroke();
        }
      }

      // Black Ring Back
      for (let i = 0; i < RING_BLACK_SEGS; i++) {
        const pA = blackRingPoints[i];
        const pB = blackRingPoints[i + 1];
        if (pA.p3.z < 0 && pB.p3.z < 0) {
          ctx.beginPath();
          ctx.moveTo(pA.p2.x, pA.p2.y);
          ctx.lineTo(pB.p2.x, pB.p2.y);
          ctx.strokeStyle = "rgba(15, 23, 42, 0.45)";
          ctx.lineWidth = 4.5;
          ctx.stroke();
        }
      }

      // -------------------------------------------------------------
      // 2. SOLID BLACK CORE (DODECAHEDRON / ICOSAHEDRON)
      // -------------------------------------------------------------
      const coreVertsProjected: Point2D[] = unitIcoVerts.map((uv) => {
        const p3 = rotatePoint(
          [uv[0] * R_CORE, uv[1] * R_CORE, uv[2] * R_CORE],
          angleX,
          angleY,
          angleZ
        );
        return project(p3);
      });

      const coreVerts3D: Point3D[] = unitIcoVerts.map((uv) =>
        rotatePoint([uv[0] * R_CORE, uv[1] * R_CORE, uv[2] * R_CORE], angleX, angleY, angleZ)
      );

      // Light vector pointing top-left-front
      const light = normalize([0.35, -0.6, 0.7]);

      // Sort faces by depth
      const sortedFaces = icoFaces
        .map(([ia, ib, ic]) => {
          const v0 = coreVerts3D[ia];
          const v1 = coreVerts3D[ib];
          const v2 = coreVerts3D[ic];

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
          const norm = [nx / len, ny / len, nz / len];

          const avgZ = (v0.z + v1.z + v2.z) / 3;
          return { ia, ib, ic, norm, avgZ };
        })
        .filter((f) => f.norm[2] > -0.05) // Backface culling
        .sort((a, b) => a.avgZ - b.avgZ);

      sortedFaces.forEach((face) => {
        const p0 = coreVertsProjected[face.ia];
        const p1 = coreVertsProjected[face.ib];
        const p2 = coreVertsProjected[face.ic];

        // Diffuse lighting
        const diffuse = Math.max(
          0,
          face.norm[0] * light[0] + face.norm[1] * light[1] + face.norm[2] * light[2]
        );

        // Core solid black shading
        const shade = Math.floor(10 + diffuse * 38);
        const greenTint = Math.floor(12 + diffuse * 45);

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();

        ctx.fillStyle = `rgb(${shade}, ${greenTint}, ${shade + 2})`;
        ctx.fill();

        // Edge highlights on faces
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 + diffuse * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // -------------------------------------------------------------
      // 3. OUTER GEODESIC WIREFRAME SHELL
      // -------------------------------------------------------------
      const wireVertsProjected: Point2D[] = wireVertices.map((uv) => {
        const p3 = rotatePoint(
          [uv[0] * R_WIRE, uv[1] * R_WIRE, uv[2] * R_WIRE],
          angleX,
          angleY,
          angleZ
        );
        return project(p3);
      });

      // Draw wireframe edges with depth coloring
      edgePairs.forEach(([i1, i2]) => {
        const pA = wireVertsProjected[i1];
        const pB = wireVertsProjected[i2];
        const avgZ = (pA.z + pB.z) / 2;

        // Front edges are vibrant emerald green, back edges dimmer
        const alpha = Math.max(0.18, Math.min(0.95, (avgZ + R_WIRE) / (2 * R_WIRE)));

        ctx.beginPath();
        ctx.moveTo(pA.x, pA.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 0.85})`;
        ctx.lineWidth = avgZ > 0 ? 1.6 : 1.1;
        ctx.stroke();
      });

      // Draw wireframe vertex joints (small dots)
      wireVertsProjected.forEach((pt) => {
        if (pt.z > -R_WIRE * 0.5) {
          const alpha = (pt.z + R_WIRE) / (2 * R_WIRE);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.z > 0 ? 1.8 : 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52, 211, 153, ${alpha * 0.9})`;
          ctx.fill();
        }
      });

      // -------------------------------------------------------------
      // 4. FRONT HALVES OF RINGS (Z >= 0) WITH GLOW
      // -------------------------------------------------------------
      // Green Ring Front
      ctx.shadowColor = "#10b981";
      ctx.shadowBlur = 8;
      for (let i = 0; i < RING_GREEN_SEGS; i++) {
        const pA = greenRingPoints[i];
        const pB = greenRingPoints[i + 1];
        if (pA.p3.z >= 0 || pB.p3.z >= 0) {
          ctx.beginPath();
          ctx.moveTo(pA.p2.x, pA.p2.y);
          ctx.lineTo(pB.p2.x, pB.p2.y);
          ctx.strokeStyle = "#059669";
          ctx.lineWidth = 5.2;
          ctx.stroke();

          // Core bright green highlight
          ctx.strokeStyle = "#34d399";
          ctx.lineWidth = 2.2;
          ctx.stroke();
        }
      }
      ctx.shadowBlur = 0; // reset

      // Black Ring Front
      for (let i = 0; i < RING_BLACK_SEGS; i++) {
        const pA = blackRingPoints[i];
        const pB = blackRingPoints[i + 1];
        if (pA.p3.z >= 0 || pB.p3.z >= 0) {
          ctx.beginPath();
          ctx.moveTo(pA.p2.x, pA.p2.y);
          ctx.lineTo(pB.p2.x, pB.p2.y);
          ctx.strokeStyle = "#0f172a";
          ctx.lineWidth = 6.8;
          ctx.stroke();

          // Subtle outer specular rim
          ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // -------------------------------------------------------------
      // 5. FLOATING EMERALD PARTICLES (DATA DUST)
      // -------------------------------------------------------------
      particles.forEach((part, i) => {
        // Rotate particle slowly around Y
        const cos = Math.cos(part.speed);
        const sin = Math.sin(part.speed);
        const nx = part.x * cos - part.z * sin;
        const nz = part.x * sin + part.z * cos;
        part.x = nx;
        part.z = nz;

        const p3 = rotatePoint([part.x, part.y, part.z], angleX * 0.4, angleY * 0.5, 0);
        const p2 = project(p3);

        const distCenter = Math.hypot(p2.x - width / 2, p2.y - height / 2);
        if (distCenter > 50) {
          ctx.fillStyle = `rgba(16, 185, 129, ${part.alpha * (p3.z > 0 ? 0.9 : 0.45)})`;
          ctx.fillRect(p2.x - part.size / 2, p2.y - part.size / 2, part.size, part.size);
        }
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // -------------------------------------------------------------
    // INTERACTION HANDLERS (MOUSE & TOUCH DRAG & TILT)
    // -------------------------------------------------------------
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / width) * 2 - 1;
      mouseY = (clientY / height) * 2 - 1;

      if (isDragging) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        targetAngleY += deltaX * 0.01;
        targetAngleX += deltaY * 0.01;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      } else {
        // Gentle cursor parallax
        targetAngleX = -0.35 + mouseY * 0.25;
        targetAngleY += mouseX * 0.003;
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
      className="relative flex flex-col items-center justify-center select-none w-full max-w-[480px] mx-auto"
    >
      {/* Background Ambient Grid & Glow (like reference image) */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#10b981]/10 blur-3xl pointer-events-none" />
      </div>

      {/* Top Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-2 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-stone-200/90 text-[#3D550C] text-[11px] font-mono font-semibold shadow-xs"
      >
        <Sparkles size={12} className="text-[#10b981]" />
        <span>Orbital Core · Live 3D</span>
      </motion.div>

      {/* 3D Canvas Box */}
      <div className="relative cursor-grab active:cursor-grabbing p-1 group">
        <canvas
          ref={canvasRef}
          className="relative z-10 transition-transform duration-300 drop-shadow-sm"
        />

        {/* Hover Hint */}
        <div className="absolute bottom-3 right-5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-stone-200/80 text-slate-500 text-[10px] font-mono opacity-80 group-hover:opacity-100 transition-opacity">
          <Rotate3D size={12} className="text-[#3D550C]" />
          <span>Drag to rotate</span>
        </div>
      </div>
    </div>
  );
};

export default OrbitalModel3D;

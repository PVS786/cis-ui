'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EcosystemNode } from "./types";
import { ECOSYSTEM_NODES } from "./data";

interface EcosystemSvgProps {
  subdivision: number;
  explodeRadius: number;
  isRotating: boolean;
  showAnnotations: boolean;
  onHoverNode: (node: EcosystemNode | null) => void;
  selectedNodeId: number | null;
  onSelectNode: (node: EcosystemNode) => void;
}

export default function EcosystemSvg({
  subdivision: _subdivision,
  explodeRadius,
  isRotating,
  showAnnotations,
  onHoverNode,
  selectedNodeId,
  onSelectNode,
}: EcosystemSvgProps) {
  const [rotationOffset, setRotationOffset] = useState<number>(0);
  const [activeHoverNode, setActiveHoverNode] = useState<EcosystemNode | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const lastTimeRef = useRef<number>(0);

  // High-performance timestamp-delta orbital rotation loop (butter smooth 60/120/144 FPS, continuous motion)
  useEffect(() => {
    if (isRotating) {
      lastTimeRef.current = performance.now();
      const tick = (now: number) => {
        const delta = now - lastTimeRef.current;
        lastTimeRef.current = now;
        // Smooth constant speed: 360 degrees in 50 seconds (~0.0072 deg/ms)
        setRotationOffset((prev) => (prev + delta * 0.0072) % 360);
        animationFrameId.current = requestAnimationFrame(tick);
      };
      animationFrameId.current = requestAnimationFrame(tick);
    } else {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isRotating]);

  // Center coordinate of SVG
  const cx = 550;
  const cy = 430;
  const rRing = 165; // Inner blueprint circle track around land tile

  // Active highlighted node (either hovered or clicked)
  const activeNode = activeHoverNode || ECOSYSTEM_NODES.find((n) => n.id === selectedNodeId) || null;

  // Isometric Coordinates for Land Tile
  const tileWidth = 160;
  const tileHeight = 80;

  // Grid cell coordinate calculations
  const getIsometricPoint = (u: number, v: number) => {
    const x = cx + (v - u) * tileWidth;
    const y = cy - tileHeight + (u + v) * tileHeight;
    return { x, y };
  };

  // 9 grid cells mapped to Node IDs (1-8) and null for center
  const gridCells = [
    { i: 0, j: 0, nodeId: 1 }, // Top (Title Due Diligence)
    { i: 0, j: 1, nodeId: 2 }, // Top-Right (Encumbrance Checks)
    { i: 0, j: 2, nodeId: 3 }, // Right (Market Analysis)
    { i: 1, j: 2, nodeId: 4 }, // Bottom-Right (Parcel Aggregation)
    { i: 2, j: 2, nodeId: 5 }, // Bottom (Infrastructure and Connectivity)
    { i: 2, j: 1, nodeId: 6 }, // Bottom-Left (Zoning Verification)
    { i: 2, j: 0, nodeId: 7 }, // Left (Regulatory Pathway)
    { i: 1, j: 0, nodeId: 8 }, // Top-Left (Acquisition Structuring)
    { i: 1, j: 1, nodeId: null }, // Center
  ];

  return (
    <div id="ecosystem-canvas" className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 1100 910"
        className="w-full h-auto max-w-[1020px] aspect-[1100/910] drop-shadow-sm overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Gold Gradient for Icons & Borders */}
          <linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3D4" />
            <stop offset="25%" stopColor="#BFA052" />
            <stop offset="50%" stopColor="#E7D8B0" />
            <stop offset="75%" stopColor="#BFA052" />
            <stop offset="100%" stopColor="#8D6B33" />
          </linearGradient>

          {/* Premium Green Gradient for the Land Top surface */}
          <linearGradient id="land-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6FAF4E" />
            <stop offset="100%" stopColor="#9BCB63" />
          </linearGradient>

          {/* Subtle reflection overlay for glossy buttons */}
          <linearGradient id="glossy-shine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </linearGradient>

          {/* Location Pin Gradient */}
          <linearGradient id="pin-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1B4D7E" />
            <stop offset="100%" stopColor="#0C2C4D" />
          </linearGradient>

          {/* Shadow Filter for Soft Shadows */}
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
            <feOffset dx="0" dy="16" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.08" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Small button shadow filter */}
          <filter id="button-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feOffset dx="0" dy="4" result="offset" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.25" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Scanner Bar Gradient */}
          <linearGradient id="scanner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BFA052" stopOpacity="0" />
            <stop offset="50%" stopColor="#BFA052" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#BFA052" stopOpacity="0" />
          </linearGradient>

          {/* Depth Shading */}
          <linearGradient id="depth-shading-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E943D" />
            <stop offset="100%" stopColor="#4A7530" />
          </linearGradient>
          <linearGradient id="depth-shading-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E8132" />
            <stop offset="100%" stopColor="#3C6425" />
          </linearGradient>
        </defs>

        {/* 1. COMPASS CROSSHAIRS (Clean design, degree numbers removed) */}
        {showAnnotations && (
          <g id="drafting-annotations" className="font-mono text-[9px] fill-[#0C2C4D] opacity-25">
            <line x1={cx - 30} y1={cy} x2={cx + 30} y2={cy} stroke="#0C2C4D" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1={cx} y1={cy - 30} x2={cx} y2={cy + 30} stroke="#0C2C4D" strokeWidth="0.5" strokeDasharray="2,2" />
          </g>
        )}

        {/* 2. BASE COMPASS DIAL / ROTATING TECHNICAL RINGS */}
        <g id="concentric-blueprint-rings">
          <circle cx={cx} cy={cy} r={rRing - 20} fill="none" stroke="#0C2C4D" strokeWidth="0.5" strokeDasharray="1,6" opacity="0.35" />
          <circle cx={cx} cy={cy} r={rRing} fill="none" stroke="#0C2C4D" strokeWidth="0.75" opacity="0.25" />
          <circle cx={cx} cy={cy} r={rRing + 2.5} fill="none" stroke="#0C2C4D" strokeWidth="1.2" strokeDasharray="6,10" opacity="0.35" />
          <circle cx={cx} cy={cy} r={rRing + 30} fill="none" stroke="#0C2C4D" strokeWidth="0.5" strokeDasharray="2,10" opacity="0.2" />
        </g>

        {/* 3. RADIAL CONNECTORS AND GOLD RING NODES */}
        <g id="blueprint-connector-lines">
          {ECOSYSTEM_NODES.map((node) => {
            const finalAngle = (node.angle + rotationOffset) % 360;
            const angleRad = (finalAngle * Math.PI) / 180;

            const xBtn = cx + explodeRadius * Math.cos(angleRad);
            const yBtn = cy + explodeRadius * Math.sin(angleRad);

            const xRingNode = cx + rRing * Math.cos(angleRad);
            const yRingNode = cy + rRing * Math.sin(angleRad);

            const innerRadius = 120;
            const xInner = cx + innerRadius * Math.cos(angleRad);
            const yInner = cy + innerRadius * Math.sin(angleRad);

            const isCurrentActive = activeNode?.id === node.id;

            return (
              <g key={`connect-${node.id}`}>
                <line
                  x1={xRingNode}
                  y1={yRingNode}
                  x2={xInner}
                  y2={yInner}
                  stroke="#0C2C4D"
                  strokeWidth="0.5"
                  strokeDasharray="2,3"
                  opacity={isCurrentActive ? 0.75 : 0.2}
                />

                <motion.line
                  x1={xBtn}
                  y1={yBtn}
                  x2={xRingNode}
                  y2={yRingNode}
                  stroke={isCurrentActive ? "url(#gold-metallic)" : "#0C2C4D"}
                  strokeWidth={isCurrentActive ? "2.2" : "1.2"}
                  strokeDasharray={isCurrentActive ? "none" : "3,3"}
                  opacity={isCurrentActive ? 0.9 : 0.45}
                  animate={isCurrentActive ? { strokeDashoffset: [0, -10] } : {}}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />

                <motion.circle
                  cx={xRingNode}
                  cy={yRingNode}
                  r={isCurrentActive ? "5.5" : "3.5"}
                  fill={isCurrentActive ? "url(#gold-metallic)" : "#BFA052"}
                  stroke="#0C2C4D"
                  strokeWidth="1.2"
                  animate={isCurrentActive ? { scale: [1, 1.25, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] } : {}}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="cursor-pointer"
                  onClick={() => onSelectNode(node)}
                  onMouseEnter={() => {
                    setActiveHoverNode(node);
                    onHoverNode(node);
                  }}
                  onMouseLeave={() => {
                    setActiveHoverNode(null);
                    onHoverNode(null);
                  }}
                />
              </g>
            );
          })}
        </g>

        {/* 4. CENTRAL AMBIENT SHADOW */}
        <ellipse cx={cx} cy={cy + 110} rx="180" ry="42" fill="#0C2C4D" opacity="0.14" filter="blur(16px)" />
        <ellipse cx={cx} cy={cy + 110} rx="120" ry="24" fill="#051424" opacity="0.22" filter="blur(8px)" />

        {/* 5. ISOMETRIC GEOMETRIC LAND PARCEL WITH DYNAMIC 3D POP-OUT GRID CELLS */}
        <g id="central-land-parcel" filter="url(#soft-shadow)" className="transition-all duration-300">
          <polygon
            points={`
              ${cx - tileWidth - 12},${cy}
              ${cx},${cy - tileHeight - 6}
              ${cx + tileWidth + 12},${cy}
              ${cx},${cy + tileHeight + 6}
            `}
            fill="none"
            stroke="url(#gold-metallic)"
            strokeWidth="0.75"
            strokeDasharray="4,4"
            opacity="0.35"
          />

          <polygon
            points={`
              ${cx - tileWidth},${cy}
              ${cx},${cy + tileHeight}
              ${cx},${cy + tileHeight + 15}
              ${cx - tileWidth},${cy + 15}
            `}
            fill="url(#depth-shading-left)"
          />

          <polygon
            points={`
              ${cx},${cy + tileHeight}
              ${cx + tileWidth},${cy}
              ${cx + tileWidth},${cy + 15}
              ${cx},${cy + tileHeight + 15}
            `}
            fill="url(#depth-shading-right)"
          />

          {/* 3x3 Isometric Interactive Grid Cells */}
          <g id="interactive-grid-cells">
            {gridCells
              .slice()
              .sort((a, b) => (a.i + a.j) - (b.i + b.j))
              .map((cell) => {
                const u1 = cell.i / 3;
                const v1 = cell.j / 3;

                const u2 = cell.i / 3;
                const v2 = (cell.j + 1) / 3;

                const u3 = (cell.i + 1) / 3;
                const v3 = (cell.j + 1) / 3;

                const u4 = (cell.i + 1) / 3;
                const v4 = cell.j / 3;

                const p1 = getIsometricPoint(u1, v1);
                const p2 = getIsometricPoint(u2, v2);
                const p3 = getIsometricPoint(u3, v3);
                const p4 = getIsometricPoint(u4, v4);

                const isActive = cell.nodeId ? activeNode?.id === cell.nodeId : false;
                const correspondingNode = cell.nodeId ? ECOSYSTEM_NODES.find(n => n.id === cell.nodeId) : null;
                const lift = 16;

                return (
                  <g key={`grid-cell-${cell.i}-${cell.j}`}>

                    {/* Animated 3D Pop-Out Side Walls */}
                    <AnimatePresence>
                      {isActive && (
                        <g pointerEvents="none">
                          {/* Front Left Wall (South-West Face) */}
                          <motion.polygon
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            points={`
                              ${p4.x},${p4.y - lift}
                              ${p3.x},${p3.y - lift}
                              ${p3.x},${p3.y}
                              ${p4.x},${p4.y}
                            `}
                            fill="url(#depth-shading-left)"
                            stroke="#3A5C26"
                            strokeWidth="0.5"
                          />

                          {/* Front Right Wall (South-East Face) */}
                          <motion.polygon
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            points={`
                              ${p3.x},${p3.y - lift}
                              ${p2.x},${p2.y - lift}
                              ${p2.x},${p2.y}
                              ${p3.x},${p3.y}
                            `}
                            fill="url(#depth-shading-right)"
                            stroke="#2E4D1E"
                            strokeWidth="0.5"
                          />

                          {/* Back Left Wall (North-West Face) */}
                          <motion.polygon
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.85 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            points={`
                              ${p1.x},${p1.y - lift}
                              ${p4.x},${p4.y - lift}
                              ${p4.x},${p4.y}
                              ${p1.x},${p1.y}
                            `}
                            fill="#4A7530"
                            stroke="#3A5C26"
                            strokeWidth="0.5"
                          />

                          {/* Back Right Wall (North-East Face) */}
                          <motion.polygon
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.85 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            points={`
                              ${p2.x},${p2.y - lift}
                              ${p1.x},${p1.y - lift}
                              ${p1.x},${p1.y}
                              ${p2.x},${p2.y}
                            `}
                            fill="#3C6425"
                            stroke="#2E4D1E"
                            strokeWidth="0.5"
                          />
                        </g>
                      )}
                    </AnimatePresence>

                    {/* Elevated Top Surface Rhombus */}
                    <motion.polygon
                      animate={{ y: isActive ? -lift : 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      points={`
                        ${p1.x},${p1.y}
                        ${p2.x},${p2.y}
                        ${p3.x},${p3.y}
                        ${p4.x},${p4.y}
                      `}
                      fill="url(#land-gradient)"
                      stroke={isActive ? "#BFA052" : "#ffffff"}
                      strokeWidth={isActive ? "2.2" : "1.2"}
                      strokeDasharray={isActive ? "none" : "3,3"}
                      opacity="0.98"
                      className="cursor-pointer transition-colors duration-200"
                      onMouseEnter={() => {
                        if (correspondingNode) {
                          setActiveHoverNode(correspondingNode);
                          onHoverNode(correspondingNode);
                        }
                      }}
                      onMouseLeave={() => {
                        if (correspondingNode) {
                          setActiveHoverNode(null);
                          onHoverNode(null);
                        }
                      }}
                      onClick={() => {
                        if (correspondingNode) {
                          onSelectNode(correspondingNode);
                        }
                      }}
                    />
                  </g>
                );
              })}
          </g>
        </g>

        {/* 6. FLOATING LOCATION PIN */}
        <g id="floating-location-pin">
          <ellipse
            cx={cx}
            cy={cy}
            rx="18"
            ry="9"
            fill="#081a2d"
            opacity="0.35"
          />
          <motion.ellipse
            cx={cx}
            cy={cy}
            rx="18"
            ry="9"
            fill="#BFA052"
            opacity="0.5"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          />

          <g transform={`translate(${cx}, ${cy}) scale(1.45)`}>
            <motion.g
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            >
              <path
                d="M 0 0 C -16 -20 -22 -34 -22 -48 A 22 22 0 1 1 22 -48 C 22 -34 16 -20 0 0 Z"
                fill="url(#pin-gradient)"
                stroke="url(#gold-metallic)"
                strokeWidth="2"
                filter="drop-shadow(0px 8px 8px rgba(12, 44, 77, 0.3))"
              />

              <circle cx="0" cy="-48" r="7.5" fill="url(#gold-metallic)" />
              <circle cx="0" cy="-48" r="3.5" fill="#BFA052" />
            </motion.g>
          </g>
        </g>

        {/* 6.5 FLOATING HOVER BADGES */}
        <g id="floating-hover-badges" pointerEvents="none">
          {gridCells.map((cell) => {
            if (!cell.nodeId) return null;
            const correspondingNode = ECOSYSTEM_NODES.find(n => n.id === cell.nodeId);
            if (!correspondingNode) return null;

            const u_mid = (cell.i + 0.5) / 3;
            const v_mid = (cell.j + 0.5) / 3;
            const p_mid = getIsometricPoint(u_mid, v_mid);

            const isActive = activeNode?.id === cell.nodeId;

            return (
              <AnimatePresence key={`badge-${cell.nodeId}`}>
                {isActive && (
                  <motion.g
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: -24 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <g transform={`translate(${p_mid.x}, ${p_mid.y - 45})`}>
                      <circle cx="0" cy="0" r="16" fill="#ffffff" filter="drop-shadow(0px 4px 8px rgba(12, 44, 77, 0.3))" />
                      <circle cx="0" cy="0" r="16" fill="none" stroke="#0C2C4D" strokeWidth="1" opacity="0.15" />

                      <g transform="translate(-10, -10) scale(0.85)">
                        <path
                          d={correspondingNode.iconPath}
                          stroke="#0C2C4D"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </motion.g>
                )}
              </AnimatePresence>
            );
          })}
        </g>

        {/* 7. EIGHT OUTER FEATURE DIALS (Scaled r=36 Circular Badges & Precision Text Placement) */}
        <g id="outer-glossy-buttons">
          {ECOSYSTEM_NODES.map((node) => {
            const finalAngle = (node.angle + rotationOffset) % 360;
            const angleRad = (finalAngle * Math.PI) / 180;

            const x = cx + explodeRadius * Math.cos(angleRad);
            const y = cy + explodeRadius * Math.sin(angleRad);

            const isCurrentActive = selectedNodeId === node.id;
            const isHovered = activeHoverNode?.id === node.id;
            const isAnyActive = isCurrentActive || isHovered;

            return (
              <g
                key={node.id}
                className="cursor-pointer select-none"
                onClick={() => onSelectNode(node)}
                onMouseEnter={() => {
                  setActiveHoverNode(node);
                  onHoverNode(node);
                }}
                onMouseLeave={() => {
                  setActiveHoverNode(null);
                  onHoverNode(null);
                }}
              >
                {/* BACKING SHADOW FILTER FOR 3D EXTENSION */}
                <circle
                  cx={x}
                  cy={y + 5}
                  r="38"
                  fill="#051424"
                  opacity="0.3"
                  filter="url(#button-shadow)"
                />

                {/* 3D EXTRUDED SIDE LIP */}
                <circle
                  cx={x}
                  cy={y + 3}
                  r="36"
                  fill="#051424"
                />

                {/* MAIN BUTTON DIAL FACE - Scaled r=36 */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="36"
                  fill="#0C2C4D"
                  stroke={isAnyActive ? "url(#gold-metallic)" : "rgba(191, 160, 82, 0.4)"}
                  strokeWidth={isAnyActive ? "2.5" : "1.5"}
                  animate={isAnyActive ? { scale: 1.12, y: -2 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                />

                {/* Glossy radial overlay */}
                <circle
                  cx={x}
                  cy={y}
                  r="35"
                  fill="url(#glossy-shine)"
                  opacity="0.85"
                  pointerEvents="none"
                />

                {/* Thin inner gold detailing circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="29"
                  fill="none"
                  stroke="url(#gold-metallic)"
                  strokeWidth="0.7"
                  strokeDasharray="2,3"
                  opacity={isAnyActive ? 0.85 : 0.35}
                  pointerEvents="none"
                />

                {/* GOLD ARCHITECTURAL ICON INSIDE - Scaled up to 1.65 */}
                <g transform={`translate(${x - 19.8}, ${y - 19.8}) scale(1.65)`} pointerEvents="none">
                  <motion.path
                    d={node.iconPath}
                    stroke="url(#gold-metallic)"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={isAnyActive ? { strokeWidth: 2.0 } : { strokeWidth: 1.6 }}
                  />
                </g>

                {/* HOVER GLOW OUTER RING */}
                {isAnyActive && (
                  <circle
                    cx={x}
                    cy={y}
                    r="44"
                    fill="none"
                    stroke="url(#gold-metallic)"
                    strokeWidth="1.4"
                    opacity="0.45"
                    pointerEvents="none"
                    className="animate-pulse"
                  />
                )}

                {/* TEXT LABEL ALWAYS CENTERED HORIZONTALLY DIRECTLY BELOW ITS CIRCLE ICON */}
                {showAnnotations && (() => {
                  const textW = 220;
                  const textH = 80;
                  const labelX = x - textW / 2;
                  const labelY = y + 42;

                  return (
                    <foreignObject
                      x={labelX}
                      y={labelY}
                      width={textW}
                      height={textH}
                      pointerEvents="none"
                      className="transition-opacity duration-300 overflow-visible"
                    >
                      <div className="flex flex-col items-center justify-start text-center h-full select-none">
                        <span className="font-gotham font-normal text-[15px] sm:text-[16px] text-[#0C2C4D] leading-[1.25] tracking-normal max-w-[200px]">
                          {node.title}
                        </span>
                      </div>
                    </foreignObject>
                  );
                })()}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

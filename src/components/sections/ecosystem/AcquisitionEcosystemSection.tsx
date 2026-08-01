'use client';

import { useState } from "react";
import { EcosystemNode } from "./types";
import EcosystemSvg from "./EcosystemSvg";

export default function AcquisitionEcosystemSection() {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode | null>(null);
  const [subdivision] = useState<number>(3); // Pristine 3x3 subdivision
  const [explodeRadius] = useState<number>(340); // Expanded outer orbit radius for breathing space
  const [isRotating] = useState<boolean>(true); // Slowly rotate orbit for high-end feel
  const [showAnnotations] = useState<boolean>(true); // Keep elegant blueprints, scales and labels

  const handleHoverNode = (node: EcosystemNode | null) => {
    if (node) {
      setSelectedNode(node);
    }
  };

  const handleSelectNode = (node: EcosystemNode) => {
    if (selectedNode?.id === node.id) {
      setSelectedNode(null);
    } else {
      setSelectedNode(node);
    }
  };

  return (
    <section className="w-full pt-6 md:pt-10 pb-2 md:pb-4 flex flex-col items-center justify-center overflow-hidden font-sans text-[#0C2C4D] relative">

      {/* Ambient center radial shading */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial from-[#0C2C4D]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Core Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center">

        {/* Section Heading */}
        <div className="space-y-3 mb-8 lg:mb-10 w-full text-left">
          <h2 className="font-tibere font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0C2C4D] tracking-tight leading-none uppercase whitespace-nowrap" style={{ wordSpacing: '0.25em' }}>
            What We Handle
          </h2>
          <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            Acquisition done right means <span className="text-[#BFA052] font-bold">no step is skipped</span> and <span className="text-[#BFA052] font-bold">no risk is overlooked</span>. Here is what we cover.
          </p>
        </div>

        {/* Main Core SVG Canvas - Centered Hero Artwork */}
        <div className="relative w-full max-w-[850px] aspect-square flex items-center justify-center">
          <EcosystemSvg
            subdivision={subdivision}
            explodeRadius={explodeRadius}
            isRotating={isRotating}
            showAnnotations={showAnnotations}
            onHoverNode={handleHoverNode}
            selectedNodeId={selectedNode ? selectedNode.id : null}
            onSelectNode={handleSelectNode}
          />
        </div>

      </div>

    </section>
  );
}

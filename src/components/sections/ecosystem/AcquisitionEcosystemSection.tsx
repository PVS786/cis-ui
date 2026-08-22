'use client';

import { useState } from "react";
import { EcosystemNode } from "./types";
import EcosystemSvg from "./EcosystemSvg";

export default function AcquisitionEcosystemSection() {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode | null>(null);
  const [subdivision] = useState<number>(3); // Pristine 3x3 subdivision
  const [explodeRadius] = useState<number>(345); // Extended outer orbit radius to lengthen connector lines
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
    <section className="w-full pt-6 md:pt-10 pb-4 md:pb-8 flex flex-col items-center justify-center overflow-hidden font-sans text-[#0C2C4D] relative">

      {/* Ambient center radial shading */}
      <div className="absolute w-[750px] h-[750px] rounded-full bg-radial from-[#0C2C4D]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Core Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 z-10 flex flex-col items-center justify-center">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 lg:gap-16 w-full mb-2 md:mb-4">
          {/* Title */}
          <div className="shrink-0">
            <h2 className="font-tibere font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0C2C4D] tracking-tight leading-[0.95] uppercase whitespace-nowrap">
              WHAT <span className="text-[#BFA052] italic">WE &nbsp;HANDLE</span>
            </h2>
          </div>

          {/* Subheading with Vertical Divider Line */}
          <div className="relative flex items-center self-stretch">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0C2C4D]" />
            <div className="pl-6 md:pl-8 py-1 max-w-2xl">
              <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                Acquisition done right means <span className="text-[#BFA052] font-bold">no step is skipped</span> and <span className="text-[#BFA052] font-bold">no risk is overlooked</span>. Here is what we cover.
              </p>
            </div>
          </div>
        </div>

        {/* Main Core SVG Canvas - Perfectly sized & centered hero artwork */}
        <div className="relative w-full max-w-[1020px] aspect-[1100/910] flex items-center justify-center -mt-2 md:-mt-4">
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

"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";

export function BackgroundBoxes() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-[#F0EFEC] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-[#F0EFEC] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-gray-800 relative z-20 font-extrabold")}>
        Shoos is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-800 relative z-20 font-semibold">
        Shoos is the best Ecommerce website ngl
      </p>
    </div>
  );
}

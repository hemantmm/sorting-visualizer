"use client";

import { useSortingAlgorithmContext } from "@/context/Visualizer";
import { useEffect } from "react";

export default function Home() {
const {arrayToSort,isSorting}=useSortingAlgorithmContext();

// useEffect(()=>{
//   console.log(arrayToSort);
//   console.log(isSorting);
// },[])
  return (
    <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
      <div className="flex h-full justify-center">
        <div id='context-container' className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"></div>
      </div>
    </main>
  );
}

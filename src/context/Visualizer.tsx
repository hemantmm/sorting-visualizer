"use client"

import { SortingAlgorithmType } from "@/lib/types";
import { MAX_ANIMATION_SPEED, generateRandomNumberFromInterval } from "@/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

interface SortingAlgorithmContextType {
    arrayToSort:number[];
        setArrayToSort:(array:number[])=>void;
        selectedAlgorithm:SortingAlgorithmType;
        setSelectedAlgorithm:(algorithm:SortingAlgorithmType)=>void;
        isSorting:boolean;
        setIsSorting:(isSorting:boolean)=>void;
        animationSpeed:number;
        setAnimationSpeed:(speed:number)=>void;
        isAnimationComplete:boolean;
        setIsAnimationComplete:(isComplete:boolean)=>void;
        resetArrayAndAnimation:()=>void;
        runAnimation:()=>void;
}

const SortingAlgorithmContext=createContext<SortingAlgorithmContextType | undefined>(undefined)

export const SortingAlgorithmProvider=({children}:{children:React.ReactNode})=>{
    const [arrayToSort,setArrayToSort]=useState<number[]>([])
    const [selectedAlgorithm,setSelectedAlgorithm]=useState<SortingAlgorithmType>("bubble")
    const [isSorting,setIsSorting]=useState<boolean>(false)
    const [animationSpeed,setAnimationSpeed]=useState<number>(MAX_ANIMATION_SPEED)
    const [isAnimationComplete,setIsAnimationComplete]=useState<boolean>(false)

    useEffect(()=>{
        resetArrayAndAnimation()
    },[])

    const resetArrayAndAnimation = () => {
        const contentContainer = document.getElementById("content-container");
        if (!contentContainer) return;
        const contentContainerWidth = contentContainer.clientWidth;
    
        const tempArray: number[] = [];
        const numLines = contentContainerWidth / 8;
        const containerHeight = window.innerHeight;
        const maxLineHeight = Math.max(containerHeight - 420, 100);
        for (let i = 0; i < numLines; i++) {
          tempArray.push(generateRandomNumberFromInterval(35, maxLineHeight));
        }
    
        setArrayToSort(tempArray);
        setIsSorting(false);
        setIsAnimationComplete(false);
    };

    const runAnimation=()=>{}

    const value={
        arrayToSort,
        setArrayToSort,
        selectedAlgorithm,
        setSelectedAlgorithm,
        isSorting,
        setIsSorting,
        animationSpeed,
        setAnimationSpeed,
        isAnimationComplete,
        setIsAnimationComplete,
        resetArrayAndAnimation,
        runAnimation
    }

    return <SortingAlgorithmContext.Provider value={value}>{children}</SortingAlgorithmContext.Provider>
}

export const useSortingAlgorithmContext=()=>{
    const context=useContext(SortingAlgorithmContext)
    if(!context)
        {
            throw new Error("useSortingAlgorithmContext must be used")
        }
        return context
}



















// "use client";

// import {SortingAlgorithmType } from "@/lib/types";
// import {
//   MAX_ANIMATION_SPEED,
//   generateRandomNumberFromInterval,
// } from "@/lib/utils";
// import React, {
//   ReactNode,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// interface SortingAlgorithmContextType {
//   arrayToSort: number[];
//   selectedAlgorithm: SortingAlgorithmType;
//   isSorting: boolean;
//   setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
//   setIsSorting: (isSorting: boolean) => void;
//   animationSpeed: number;
//   setAnimationSpeed: (speed: number) => void;
//   resetArrayAndAnimation: () => void;
//   runAnimation: () => void;
//   isAnimationComplete: boolean;
//   requiresReset: boolean;
// }

// const SortingAlgorithmContext = createContext<
//   SortingAlgorithmContextType | undefined
// >(undefined);

// export const SortingAlgorithmProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [arrayToSort, setArrayToSort] = useState<number[]>([]);
//   const [selectedAlgorithm, setSelectedAlgorithm] =
//     useState<SortingAlgorithmType>("bubble");
//   const [isSorting, setIsSorting] = useState<boolean>(false);
//   const [isAnimationComplete, setIsAnimationComplete] =
//     useState<boolean>(false);
//   const [animationSpeed, setAnimationSpeed] =
//     useState<number>(MAX_ANIMATION_SPEED);
//   const requiresReset = isAnimationComplete || isSorting;

//   useEffect(() => {
//     resetArrayAndAnimation();
//   }, []);

//   const resetArrayAndAnimation = () => {
//     const contentContainer = document.getElementById("content-container");
//     if (!contentContainer) return;
//     const contentContainerWidth = contentContainer.clientWidth;

//     const tempArray: number[] = [];
//     const numLines = contentContainerWidth / 8;
//     const containerHeight = window.innerHeight;
//     const maxLineHeight = Math.max(containerHeight - 420, 100);
//     for (let i = 0; i < numLines; i++) {
//       tempArray.push(generateRandomNumberFromInterval(35, maxLineHeight));
//     }

//     setArrayToSort(tempArray);
//     setIsSorting(false);
//     setIsAnimationComplete(false);
//   };

//   const runAnimation = () => {};

//   const value = {
//     arrayToSort,
//     selectedAlgorithm,
//     setSelectedAlgorithm,
//     isSorting,
//     setIsSorting,
//     animationSpeed,
//     setAnimationSpeed,
//     isAnimationComplete,
//     resetArrayAndAnimation,
//     runAnimation,
//     requiresReset,
//   };

//   return (
//     <SortingAlgorithmContext.Provider value={value}>
//       {children}
//     </SortingAlgorithmContext.Provider>
//   );
// };

// export const useSortingAlgorithmContext = (): SortingAlgorithmContextType => {
//   const context = useContext(SortingAlgorithmContext);
//   if (context === undefined) {
//     throw new Error(
//       "useSortingAlgorithmContext must be used within a SortingAlgorithmProvider"
//     );
//   }
//   return context;
// };
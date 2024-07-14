import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";

export const MIN_ANIMATION_SPEED=100;
export const MAX_ANIMATION_SPEED=400;

export function generateRandomNumberFromInterval(min:number,max:number)
{
    return Math.floor(Math.random()*(max-min+1)+min)
}

export const algorithmOptions=[
    {label:"Bubble",value:"bubble"},
    {label:"Quick",value:"quick"},
    {label:"Merge",value:"merge"},
    {label:"Insertion",value:"insertion"},
    {label:"Selection",value:"selection"},
]

export function generateAnimationArray(
    selectedAlgorithm:SortingAlgorithmType,
    isSorting:boolean,
    array:number[],
    runAnimation:(animations:AnimationArrayType)=>void
) {
    switch(selectedAlgorithm)
    {
        case "bubble":
            // generateBubbleSortAnimation
            generateBubbleSortAnimationArray(isSorting,array,runAnimation)
            break;
        case "selection":
            generateSelectionSortAnimationArray(isSorting,array,runAnimation)
            break;
        case "insertion":
            generateInsertionSortAnimationArray(isSorting,array,runAnimation)
            break;
        case "merge":
            generateMergeSortAnimationArray(isSorting,array,runAnimation)
        default:
        break;
    }
}

export const sortingAlgorithmsData = {
    bubble: {
      title: "Bubble Sort",
      description:
        // "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
        "lorem23",
      worstCase: "O(n²)",
      averageCase: "O(n²)",
      bestCase: "O(n)",
    },
    selection:{
        title:"Selection Sort",
        description:
        "lorem1234",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n²)"
    },
    insertion:{
        title:"Insertion Sort",
        description:
        "lorem12456789",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n)",
    },
    merge:{
        title:"Insertion Sort",
        description:
        "lorem12456789",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n)",
    },
}
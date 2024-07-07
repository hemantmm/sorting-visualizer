import { generateBubbleSortAnimation } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";

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
            generateBubbleSortAnimation(isSorting,array,runAnimation)
            break;
        default:
        break;
        //     return bubbleSort(array,runAnimation)
        // case "quick":
        //     return quickSort(array,runAnimation)
        // case "merge":
        //     return mergeSort(array,runAnimation)
        // case "insertion":
        //     return insertionSort(array,runAnimation)
        // case "selection":
        //     return selectionSort(array,runAnimation)
    }
}
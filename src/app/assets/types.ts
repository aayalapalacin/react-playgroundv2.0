import { ComponentType } from "react";

export interface Step{
    title: string;
    description: string;
    codeSample: string;
    icon: string;

}

export interface Tutorial {
    id: number;
    category: string;
    name: string;
    steps: Step[];
    icon : string; 
    tutorialComponent: ComponentType; // Accepts a component that takes 'title' as a prop
}


export interface Categories {
    id: number;
    name: string;
    icon : string; 
    description:string;
}

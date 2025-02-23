
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
}


export interface Categories {
    name: string;
    icon : string; 
    description:string;
}


export interface Step{
    title: string;
    description: string;
    codeSample: string;
    icon: string;

}

export interface Tutorial {
    category: string;
    name: string;
    steps: Step[];
    icon : string; 
}


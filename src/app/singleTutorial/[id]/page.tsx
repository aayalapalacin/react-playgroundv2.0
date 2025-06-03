import { tutorialsArray } from "@/app/assets/tutorials";
import { Tutorial } from "@/app/assets/types";
import TransitionCards from "@/components/transitionCards";
import { notFound } from "next/navigation";

import React from "react";

export default async function SingleTutorial({ params }: { params: { id: string } }) {
  const { id } = await params; 
  const idToInt:number = parseInt(id); 
  
  const selectedTutorial: Tutorial = tutorialsArray.filter((filterTutorial)=> filterTutorial.id == idToInt)[0];

  if (!selectedTutorial) {
    notFound();
  }

  return (
    <div className="container justify-items-center m-8 mx-auto w-3/4">
      <TransitionCards  tutorial={selectedTutorial}/>
      <div className="w-full flex justify-center">
        
        {React.createElement(selectedTutorial.tutorialComponent)}
      </div>
    </div>
  );
}
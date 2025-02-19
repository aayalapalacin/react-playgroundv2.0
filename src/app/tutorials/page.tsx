"use client";
// import Navbar from "@/components/ui/navbar";
import { tutorialsArray } from "@/app/assets/tutorials";
import TransitionCards from "@/components/transitionCards";

export default function Tutorials() {
  return (
    <div className="container justify-items-center m-8 m-auto w-3/4">
      <h1>Here are my tutorials!:</h1>
      <div>
      {tutorialsArray && tutorialsArray.length > 0
        ? tutorialsArray.map((tutorial, tutorialIndex) => {
            return  <TransitionCards tutorial={tutorial} key={tutorialIndex+"tutoral"} />;
          })
        : "no tutorials"}
      </div>
    </div>
  );
}

"use client";
// import Navbar from "@/components/ui/navbar";
import { tutorialsArray } from "@/tutorials";
import TransitionCards from "@/components/transitionCards";

export default function Tutorials() {
  return (
    <div className="container justify-items-center m-8">
      <h1>Here are my tutorials!:</h1>
      <div>
        {tutorialsArray && tutorialsArray.length > 0
          ? tutorialsArray.map((tutorial) => {
              return <TransitionCards tutorial={tutorial} key={""} />;
            })
          : "no tutorials"}
      </div>
    </div>
  );
}

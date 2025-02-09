import React from "react";
import { tutorialsArray } from "@/tutorials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TransitionCards from "@/components/transitionCards";

export default function Home() {
  return (
    <div className="container justify-items-center m-8">
      <h1>Here are my tutorials!:</h1>
      {tutorialsArray && tutorialsArray.length > 0
        ? tutorialsArray.map((tutorial, tutorialIndex) => {
            return  <TransitionCards tutorial={tutorial} />;
          })
        : "no tutorials"}
      <Button className="mt-8">
        <Link href={"https://ui.shadcn.com/docs/components/button"}>
          Click My ShadCN Button
        </Link>
      </Button>
    </div>
  );
}

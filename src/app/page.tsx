import React from "react";
// import Navbar from "@/components/ui/navbar";
import { tutorialsArray } from "@/tutorials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TransitionCards from "@/components/transitionCards";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="container justify-items-center m-8">
       <div className="navbar m-8">
        <NavigationMenu>
          <NavigationMenuList>
            {/* This is where the Tutorials tab link starts */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-48">
                Tutorials
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  {tutorialsArray && tutorialsArray.length > 0
        ? tutorialsArray.map((tutorial, tutorialIndex) => {
            return  <TransitionCards tutorial={tutorial} />}
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> 
      </div> 
      {/* <Navbar/> */}

      <h1>Here are my tutorials!:</h1>

      <Button className="mt-8">
        <Link href={"https://ui.shadcn.com/docs/components/button"}>
          Click My ShadCN Button
        </Link>
      </Button>
    </div>
  );
}

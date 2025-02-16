"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <div className="container justify-items-center m-8">
      <h1>Here are my tutorials!:</h1>
  

      <Button className="mt-8">
        <Link href={"https://ui.shadcn.com/docs/components/button"}>
          Click My ShadCN Button
        </Link>
      </Button>
    </div>
  );
}

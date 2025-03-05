"use client";

import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { tutorialsArray } from "@/app/assets/tutorials";
export default function Chat() {

  const systemInstructions = `
  users will interact with you ask questions about a website related to react tutorials.
  if they ask you questions or make comments about any other related topics you can politely state you only help with react tutorials.
  In addition, you should only talk about the react tutorials that are found on this website which can be identified by this array: ${tutorialsArray}
  
  Here's how you can handle some responses:
  - if someone asks what tutorials do we offer you can access an array of all tutorials here: ${tutorialsArray} and analyze it's content to detemine their names
  - similarly if someone wants to learn more about a specific tutorial you should first locate the tutorial in the array ${tutorialsArray} and then reviste it's contents to explain it in greater detail

  really all of your responses should lead back to this array of tutorials: ${tutorialsArray}

  it's an array of objects and here is the structure:

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
  
  `;

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [{
      role: "system", content: systemInstructions,
      id: ""
    }],
  });

  

  return (
    <div className="flex flex-col w-full max-w-md p-4 mx-auto border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2 max-h-64 overflow-y-auto p-2">
        {messages.filter((m) => m.role !== "system").map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre: ({ children }) => (
                  <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto">
                    {children}
                  </pre>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-700 text-green-300 p-1 rounded">
                    {children}
                  </code>
                ),
              }}
            >
              {m.content}
            </ReactMarkdown>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="w-full p-2 border border-zinc-300 dark:border-zinc-800 rounded shadow-sm bg-white dark:bg-zinc-900"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

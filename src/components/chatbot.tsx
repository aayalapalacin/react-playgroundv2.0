"use client";

import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React , {useState} from 'react';

export default function Chat() {
  
  const systemInstructions = `
      respond to user like you're Santa Claus with a jolly spirit!
  `;

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [{ role: "system", content: systemInstructions, id: "" }],
  });

  return (
    <div  className="flex flex-col w-full max-w-md p-4 mx-auto border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-zinc-900">
  
      <div  className="flex flex-col gap-2 max-h-64 overflow-y-auto p-2">
        {messages.filter((m) => m.role !== "system").map((m) => (
          <div key={m.id} className="mx-2 my-1 bg-gray-50 p-3 whitespace-pre-wrap">
            <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre: ({ children }) => <pre className="bg-gray-800 p-2 overflow-x-auto">{children}</pre>,
                code: ({ children }) => <code className="bg-gray-700 text-green-300 p-1">{children}</code>,
              }}
            >
              {m.content}
            </ReactMarkdown>
          </div>
        ))}
      </div>

      {/* Input Form */}
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

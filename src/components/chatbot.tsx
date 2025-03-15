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
    <div className=" w-full max-w-md p-4 mx-auto border border-gray-300 bg-white">
      {/* Message Display Area */}
      <div className=" max-h-64 overflow-y-auto p-2">
        {messages.filter((m) => m.role !== "system").map((m) => (
          <div key={m.id} className="mx-2 my-4 bg-gray-50 p-3 whitespace-pre-wrap">
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
          className="w-full p-2 border border-gray-300"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

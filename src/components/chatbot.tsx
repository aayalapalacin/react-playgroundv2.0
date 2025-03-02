"use client";

import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md p-4 mx-auto border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2 max-h-64 overflow-y-auto p-2">
        {messages.map((m) => (
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

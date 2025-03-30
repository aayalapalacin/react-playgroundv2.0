"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <h1>About Us</h1>
      <p>We are developers who have been where you are.</p>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Go Home
      </button>
    </div>
  );
}

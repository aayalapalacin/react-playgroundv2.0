"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 ">
      <div>Logo</div>
      <div>
        <Link
          href="/"
          className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
        >
          Home
        </Link>
        <Link
          href="/tutorials"
          className={
            pathname === "/tutorials" ? "font-bold mr-4" : "text-blue-500 mr-4"
          }
        >
          Tutorials
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"
          }
        >
          About
        </Link>
      </div>
    </nav>
  );
};

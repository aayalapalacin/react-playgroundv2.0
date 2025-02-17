"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ABeeZee } from "next/font/google";

const abeezee = ABeeZee({ subsets: ["latin"], weight: "400" });

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={`flex justify-between items-end p-2  ${abeezee.className}`}>
      <div className="flex items-center justify-center"><Image src="/react-logo-no-title.png" className="w-20" alt="react-playground-logo" width={500} height={500}/>
      <h4 className={`mt-5 text-[#61dafb] text-xl`}>React Playground</h4>
      </div>
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
            pathname === "/tutorials" ? "font-bold mr-4" : "text-[#61dafb] mr-4"
          }
        >
          Tutorials
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about" ? "font-bold mr-4" : "text-[#61dafb] mr-4"
          }
        >
          About
        </Link>
      </div>
    </nav>
  );
};

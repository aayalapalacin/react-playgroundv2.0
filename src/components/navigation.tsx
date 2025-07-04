"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ABeeZee } from "next/font/google";
import "../app/styles/navigation.css";

const abeezee = ABeeZee({ subsets: ["latin"], weight: "400" });

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={`flex justify-between items-end p-2  ${abeezee.className}`}>
      <div className="flex items-center justify-center">
        <Image
          src="/react-logo-no-title.png"
          className="w-20"
          alt="react-playground-logo"
          width={500}
          height={500}
        />
        <h4 className={`mt-5 text-[#00A6FB] text-xl nav-title`}>React Playground</h4>
      </div>
      <div className="flex">
        <Link
          href="/"
          className={
            pathname === "/" ? "font-bold mr-4" : "text-[#00A6FB] mr-4"
          }
        >
          Home
        </Link>
        <Link
          href="/tutorials"
          className={
            pathname === "/tutorials" ? "font-bold mr-4" : "text-[#00A6FB] mr-4"
          }
        >
          Tutorials
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about" ? "font-bold mr-4" : "text-[#00A6FB] mr-4"
          }
        >
          About
        </Link>
      
      </div>
    </nav>
  );
};

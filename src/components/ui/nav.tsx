"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "~/utils/cn";
import Link from "next/link";
import { HoverBorderGradient } from "./gradientButton";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
];

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
    const pathname = usePathname();

  return (
    <>
    {pathname !== "/" && (
        <div className="absolute text-white top-10 left-0 p-5 lg:top-10 lg:left-10">
            <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-6 h-6 sm:w-4 sm:h-4" />
                <p className="hidden sm:inline">Home</p>
            </Link>
        </div>
    )}
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relativeitems-center flex space-x-1 text-neutral-60 hover:text-neutral-500"
            )}
          >
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link href="projects">
            <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white text-black flex items-center space-x-2"
            >
                <span>Projects</span>
            </HoverBorderGradient>
        </Link>
      </motion.div>
    </AnimatePresence>
    </>
  );
};

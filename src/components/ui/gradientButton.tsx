"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "~/utils/cn";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = (currentIndex + 1) % directions.length;
    return directions[nextIndex] ?? "TOP";
  };

  const movingMap: Record<Direction, string> = {
    TOP: "linear-gradient(90deg, #3275F8 0%, #800080 50%, #FF0000 100%)",
    LEFT: "linear-gradient(180deg, #3275F8 0%, #800080 50%, #FF0000 100%)",
    BOTTOM: "linear-gradient(270deg, #3275F8 0%, #800080 50%, #FF0000 100%)",
    RIGHT: "linear-gradient(0deg, #3275F8 0%, #800080 50%, #FF0000 100%)",
  };

  const highlight =
    "linear-gradient(90deg, #3275F8 0%, #800080 50%, #FF0000 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(4px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={twMerge("bg-white rounded-md shadow-xl", className)}>
      {children}
    </div>
  );
}

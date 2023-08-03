import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`${className} bg-white rounded-md shadow-xl`}>
      {children}
    </div>
  );
}

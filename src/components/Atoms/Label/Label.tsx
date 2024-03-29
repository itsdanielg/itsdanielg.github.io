import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const DEFAULT_LABEL_STYLE = [
  "bg-gradient-to-r",
  "from-blue",
  "to-blue",
  "bg-no-repeat",
  "[background-position:0_100%]",
  "[background-size:0_1px]",
  "text-blue",
  "md:hover:[background-size:100%_1px]",
  "md:focus:[background-size:100%_1px]",
  "transition-all",
  "duration-300"
];

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  className?: string;
}

export function Label({ label, className = "", ...props }: LabelProps) {
  return (
    <span
      {...props}
      className={twMerge(DEFAULT_LABEL_STYLE, className)}>
      {label}
    </span>
  );
}

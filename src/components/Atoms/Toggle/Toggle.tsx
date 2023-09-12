import { ButtonHTMLAttributes } from "react";

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isToggle: boolean;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export function Toggle({ isToggle, className = "", children, ...props }: ToggleProps) {
  const toggleStyle = isToggle ? "bg-blueHover text-white" : "bg-white";

  return (
    <button
      {...props}
      className={`${className} ${toggleStyle}  flex flex-col items-center gap-1 border-2 border-transparent rounded-lg md:hover:border-black transition`}>
      {children}
    </button>
  );
}

import { MouseEventHandler } from "react";
import { Button, LinkButton } from "../Atoms/Button";

const DEFAULT_BUTTON_STYLE = [
  "bg-white",
  "bg-gradient-to-r",
  "from-blue-1",
  "to-blue-1",
  "bg-no-repeat",
  "[background-position:0_100%]",
  "[background-size:0_100%]",
  "md:hover:bg-white",
  "md:hover:[background-size:100%_100%]",
  "md:hover:text-white",
  "duration-300"
].join(" ");

interface AnimatedButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

interface AnimatedLinkButtonProps {
  label: string;
  to: string;
  target?: boolean;
  className?: string;
}

export function AnimatedButton({ label, onClick, className = "" }: AnimatedButtonProps) {
  return (
    <Button
      className={`${className} ${DEFAULT_BUTTON_STYLE}`}
      background="text-black"
      label={label}
      onClick={onClick}
    />
  );
}

export function AnimatedLinkButton({ label, to, target = false, className = "" }: AnimatedLinkButtonProps) {
  return (
    <LinkButton
      className={`${className} ${DEFAULT_BUTTON_STYLE}`}
      background="text-black"
      label={label}
      to={to}
      target={target}
    />
  );
}

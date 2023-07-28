import { MouseEventHandler } from "react";
import { Button, LinkButton } from "../Atoms/Button";

const DEFAULT_BUTTON_STYLE = [
  "bg-white",
  "bg-gradient-to-r",
  "from-blue",
  "to-blue",
  "bg-no-repeat",
  "[background-position:0_100%]",
  "[background-size:0_100%]"
].join(" ");

const DEFAULT_BUTTON_HOVER_STYLE = [
  "md:hover:bg-white",
  "md:hover:[background-size:100%_100%]",
  "md:hover:text-white"
].join(" ");

interface AnimatedButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

interface AnimatedLinkButtonProps {
  label: string;
  to: string;
  disabled?: boolean;
  target?: boolean;
  className?: string;
}

export function AnimatedButton({ label, onClick, disabled = false, className = "" }: AnimatedButtonProps) {
  const disabledStyle = disabled ? "" : DEFAULT_BUTTON_HOVER_STYLE;

  return (
    <Button
      className={`${className} ${disabledStyle} ${DEFAULT_BUTTON_STYLE}`}
      disabled={disabled}
      background="text-black"
      label={label}
      onClick={onClick}
    />
  );
}

export function AnimatedLinkButton({
  label,
  to,
  disabled = false,
  target = false,
  className = ""
}: AnimatedLinkButtonProps) {
  const disabledStyle = disabled ? "" : DEFAULT_BUTTON_HOVER_STYLE;

  return (
    <LinkButton
      className={`${className} ${disabledStyle} ${DEFAULT_BUTTON_STYLE}`}
      background="text-black"
      label={label}
      to={to}
      disabled={disabled}
      target={target}
    />
  );
}

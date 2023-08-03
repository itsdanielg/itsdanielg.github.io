import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional for styling
import "tippy.js/animations/shift-away.css";

interface TooltipProps {
  content: ReactNode;
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  placement?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ content, children, placement = "right" }: TooltipProps) {
  return (
    <Tippy
      arrow={true}
      animation="shift-away"
      placement={placement}
      content={content}>
      {children}
    </Tippy>
  );
}

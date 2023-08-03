import { HTMLAttributes } from "react";
import ReactDOM from "react-dom";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: JSX.Element | JSX.Element[];
  root?: "modal" | "modal2";
  className?: string;
}

export function Modal({ show, children, root = "modal", className = "", ...props }: ModalProps) {
  const backgroundTransition = show ? "visible opacity-1" : "invisible opacity-0";
  const modalTransition = show ? "translate-y-0" : "translate-y-[-2rem]";

  const modalDiv = document.getElementById(root)!;
  return ReactDOM.createPortal(
    <div
      {...props}
      className={`${backgroundTransition} fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black-1-t transition-all duration-300`}>
      <div
        className={`${className} ${modalTransition} rounded-none md:rounded-lg bg-white-1 transition-all duration-300`}
        onClick={(e: any) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalDiv
  );
}

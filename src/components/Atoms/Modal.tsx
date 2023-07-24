import { MouseEventHandler } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  onClick: MouseEventHandler<HTMLDivElement>;
  root?: "modal" | "modal2";
  className?: string;
}

export function Modal({ children, onClick, root = "modal", className = "", ...props }: ModalProps) {
  const modalDiv = document.getElementById(root)!;

  return ReactDOM.createPortal(
    <div
      {...props}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black-1-t animate-fade"
      onClick={onClick}>
      <div
        className={`${className} rounded-md bg-white-1 animate-modalOpen`}
        onClick={(e: any) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalDiv
  );
}

import { Dispatch, SetStateAction } from "react";
import { Modal } from "../../Atoms/Modal";

interface StandardModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
  root?: "modal" | "modal2";
  className?: string;
}

export function StandardModal({ show, setShow, children, root = "modal", className = "" }: StandardModalProps) {
  return (
    <Modal
      show={show}
      onClick={() => setShow(false)}
      root={root}
      className={className}>
      {children}
    </Modal>
  );
}

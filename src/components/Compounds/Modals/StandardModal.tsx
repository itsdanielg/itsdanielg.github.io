import { Dispatch, SetStateAction } from "react";
import { Modal } from "../../Atoms/Modal";

interface StandardModalProps {
  children: JSX.Element | JSX.Element[];
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export function StandardModal({ children, show, setShow, className = "" }: StandardModalProps) {
  if (!show) return <></>;
  return (
    <Modal
      onClick={() => setShow(false)}
      root="modal2"
      className={className}>
      {children}
    </Modal>
  );
}

import { useNavigate } from "react-router-dom";
import { Modal } from "../../Atoms/Modal";

interface LinkModalProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function LinkModal({ children, className }: LinkModalProps) {
  const navigate = useNavigate();

  return (
    <Modal
      className="w-11/12 h-[95%] sm:w-5/6 sm:h-[90%]"
      onClick={() => navigate(-1)}>
      {children}
    </Modal>
  );
}

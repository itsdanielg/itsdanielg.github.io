import { Dispatch, SetStateAction } from "react";
import { Snackbar } from "../Atoms";

export type ContactSnackbarRef = {};

interface ContactSnackbarProps {
  label: string;
  showSnackbar: boolean;
  setShowSnackbar: Dispatch<SetStateAction<boolean>>;
  error?: boolean;
}

export function ContactSnackbar({ label, showSnackbar, setShowSnackbar, error }: ContactSnackbarProps) {
  const showResult = () => {
    setTimeout(() => {
      setShowSnackbar(false);
      console.log;
    }, 3000);
  };

  const visibility = showSnackbar ? "visible animate-snackbar" : "invisible";
  const errorStyle = error ? "bg-black-1" : "bg-blue text-white";

  if (showSnackbar) showResult();
  return (
    <Snackbar className={`${visibility} ${errorStyle} w-72 h-12`}>
      <span>{label}</span>
    </Snackbar>
  );
}

import { Dispatch, SetStateAction } from "react";
import { Snackbar } from "@/components/Atoms";

interface ContactSnackbarProps {
  showSnackbar: boolean;
  setShowSnackbar: Dispatch<SetStateAction<boolean>>;
}

export function ContactSnackbar({ showSnackbar, setShowSnackbar }: ContactSnackbarProps) {
  const showResult = () => {
    setTimeout(() => {
      setShowSnackbar(false);
      console.log;
    }, 3000);
  };

  const visibility = showSnackbar ? "visible animate-snackbar" : "invisible";

  if (showSnackbar) showResult();
  return (
    <Snackbar className={`${visibility} bg-blue text-white w-72 h-12`}>
      <span>Message Sent!</span>
    </Snackbar>
  );
}

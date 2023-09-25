import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useContact } from "@/api/hooks";
import { Loader, Button } from "@/components/Atoms";
import { StandardModal } from "@/components/Compounds";
import { ContactInput, ContactTextArea } from "./ContactInput";

interface ContactModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setShowSnackbar: Dispatch<SetStateAction<boolean>>;
}

export function ContactModal({ show, setShow, setShowSnackbar }: ContactModalProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [error, setError] = useState(false);

  const { loading, sendMessage } = useContact();

  useEffect(() => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setError(false);
  }, [show]);

  const handleSubmit = async () => {
    const error = await sendMessage(name, email, subject, message);
    if (error) {
      setError(true);
      return;
    }
    setShowSnackbar(true);
    setShow(false);
  };

  return (
    <StandardModal
      show={show}
      setShow={setShow}
      root="modal2"
      className="flex flex-col gap-4 w-[85%] md:w-auto p-6">
      <div className="flex items-center justify-between">
        <span className="text-xl">Let's get in touch!</span>
      </div>
      <form className="flex flex-col items-center gap-4">
        <ContactInput
          placeholder="Name"
          value={name}
          setValue={setName}
        />
        <ContactInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <ContactInput
          placeholder="Subject"
          value={subject}
          setValue={setSubject}
        />
        <ContactTextArea
          placeholder="Message"
          value={message}
          setValue={setMessage}
        />
        {error && <span className="text-red-500 text-sm">Message could not be sent. Please try again.</span>}
        {loading ? (
          <Loader size="contact" />
        ) : (
          <Button
            className="p-2 rounded-lg"
            type="button"
            disabled={name === "" || email === "" || subject === "" || message === ""}
            onClick={async () => await handleSubmit()}>
            Submit
          </Button>
        )}
      </form>
    </StandardModal>
  );
}

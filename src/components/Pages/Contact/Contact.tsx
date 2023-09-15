import { useState } from "react";
import { Button } from "@/components/Atoms";
import { ContactModal } from "./ContactModal";
import { ContactSnackbar } from "./ContactSnackbar";

export function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        animated>
        Contact
      </Button>
      <ContactModal
        show={showModal}
        setShow={setShowModal}
        setShowSnackbar={setShowSnackbar}
      />
      <ContactSnackbar
        label="Message sent!"
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
      />
    </>
  );
}

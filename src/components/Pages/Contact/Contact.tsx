import { useState } from "react";
import { AnimatedButton } from "../../Compounds/AnimatedButton";
import { ContactSnackbar } from "../../Compounds/ContactSnackbar";
import { ContactModal } from "./ContactModal";

export function Contact() {
  const [show, setShow] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <>
      <AnimatedButton
        label="Contact"
        onClick={() => setShow(true)}
      />
      <ContactModal
        show={show}
        setShow={setShow}
        setShowSnackbar={setShowSnackbar}
      />
      <ContactSnackbar
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        label="Message sent!"
      />
    </>
  );
}

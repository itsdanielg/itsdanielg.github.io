import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailMessage } from "../calls";

const userID = "user_gJB2xJxcjxHaAsGivS4G1";

export function useContact() {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (name: string, email: string, subject: string, message: string) => {
    setLoading(true);
    const { error } = await emailMessage(name, email, subject, message);
    setLoading(false);
    return error;
  };

  useEffect(() => emailjs.init(userID), []);

  return { loading, sendMessage };
}

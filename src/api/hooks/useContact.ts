import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailMessage } from "../calls/emailMessage";

const userID = "user_gJB2xJxcjxHaAsGivS4G1";

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendMessage = async (name: string, email: string, subject: string, message: string) => {
    setLoading(true);
    const res = await emailMessage(name, email, subject, message);
    if ((res.response = 401)) {
      setError(true);
    }
    setLoading(false);
    return res.response;
  };

  useEffect(() => emailjs.init(userID), []);

  return { loading, error, sendMessage };
}

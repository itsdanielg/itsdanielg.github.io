import { Dispatch, SetStateAction } from "react";

const DEFAULT_CONTACT_INPUT_STYLE = ["p-3", "w-full", "md:w-96", "rounded-lg", "outline-none"].join(" ");

interface ContactInputProps {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function ContactInput({ placeholder, value, setValue }: ContactInputProps) {
  return (
    <input
      className={DEFAULT_CONTACT_INPUT_STYLE}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function ContactTextArea({ placeholder, value, setValue }: ContactInputProps) {
  return (
    <textarea
      className={DEFAULT_CONTACT_INPUT_STYLE}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

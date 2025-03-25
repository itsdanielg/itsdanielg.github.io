import { useState, useRef, ReactNode } from "react";

interface DisclosureProps {
  title: ReactNode;
  children: JSX.Element | JSX.Element[];
}

export function Disclosure({ title, children }: DisclosureProps) {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(0);
  const childRef = useRef<HTMLDivElement>(null);

  const toggleShow = () => {
    if (!childRef.current) return;
    setHeight(show ? 0 : childRef.current.scrollHeight);
    setShow(!show);
  };

  return (
    <div
      className={`${show ? "gap-2" : "gap-0"} relative flex flex-col p-4 w-full bg-white rounded-lg transition-all duration-300`}>
      <button
        onClick={toggleShow}
        className={`flex items-center w-full group`}>
        {title}
        <span className={`${show ? "rotate-[-90deg]" : "rotate-0"} ml-auto transition-all duration-300`}>◀</span>
      </button>
      <div
        className={`${show ? "border-gray" : "opacity-0"} border-t transition-all duration-300`}
        style={{ height: `${height}px` }}>
        <div
          ref={childRef}
          className="pt-2">
          {children}
        </div>
      </div>
    </div>
  );
}

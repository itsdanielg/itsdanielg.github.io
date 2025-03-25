import { Fragment, ReactElement } from "react";
import { Disclosure } from "@/components/Atoms";

interface AccordionProps {
  children: ReactElement<typeof Disclosure>[];
}

export function Accordion({ children }: AccordionProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg w-full">
      {...children.map((child, index, array) => (
        <Fragment key={index}>
          {child}
          {index < array.length - 1 && <hr className=" border-1 border-black" />}
        </Fragment>
      ))}
    </div>
  );
}

Accordion.Disclosure = Disclosure;

import { contact } from "../../../../text/contact";
import { SVGIcon } from "../../../Compounds/SVGIcon";
import { Label } from "../../../Atoms/Label";
import { LabelLink } from "../../../Compounds/Links";

export interface InfoRowProps {
  type: "email" | "github" | "linkedin";
}

export function InfoRow({ type }: InfoRowProps) {
  return (
    <div className="flex items-center gap-2">
      <SVGIcon fileName={type} />
      {type !== "email" ? (
        <LabelLink
          label={contact[type]}
          url={`https://www.${contact[type]}`}
        />
      ) : (
        <a
          className="group"
          href={`mailto:${contact[type]}`}>
          <Label
            className="text-blue"
            label={contact[type]}
          />
        </a>
      )}
    </div>
  );
}

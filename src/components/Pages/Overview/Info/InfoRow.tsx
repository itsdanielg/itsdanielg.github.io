import { contact } from "@/text";
import { Label } from "@/components/Atoms";
import { Icon, LabelLink } from "@/components/Compounds";

export interface InfoRowProps {
  type: "email" | "github" | "linkedin";
}

export function InfoRow({ type }: InfoRowProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon asset={type} />
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

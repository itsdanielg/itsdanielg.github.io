const DEFAULT_LABEL_STYLE = [
  "bg-gradient-to-r",
  "from-blue-1",
  "to-blue-1",
  "bg-no-repeat",
  "[background-position:0_100%]",
  "[background-size:0_1px]",
  "hover:[background-size:100%_1px]",
  "focus:[background-size:100%_1px]",
  "transition-all",
  "duration-300"
].join(" ");

interface LabelProps {
  label: string;
  className?: string;
}

export function Label({ label, className = "", ...props }: LabelProps) {
  return (
    <span
      {...props}
      className={`${className} ${DEFAULT_LABEL_STYLE}`}>
      {label}
    </span>
  );
}

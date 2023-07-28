const DEFAULT_LABEL_STYLE = [
  "bg-gradient-to-r",
  "from-blue",
  "to-blue",
  "bg-no-repeat",
  "[background-position:0_100%]",
  "[background-size:0_1px]",
  "md:hover:[background-size:100%_1px]",
  "md:focus:[background-size:100%_1px]",
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

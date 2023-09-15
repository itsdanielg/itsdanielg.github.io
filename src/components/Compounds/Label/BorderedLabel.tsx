interface BorderedLabel {
  label: string;
}

export function BorderedLabel({ label }: BorderedLabel) {
  return <span className="font-expletusSans tracking-wider border border-black py-1 px-2">{label.toUpperCase()}</span>;
}

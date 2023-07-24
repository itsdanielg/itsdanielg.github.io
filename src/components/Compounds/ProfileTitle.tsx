interface ProfileTitleProps {
  label: string;
}

export function ProfileTitle({ label }: ProfileTitleProps) {
  return <span className="font-expletusSans tracking-wider border border-black py-1 px-2">{label.toUpperCase()}</span>;
}

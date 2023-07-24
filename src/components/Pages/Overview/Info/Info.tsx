import { InfoRow } from "./InfoRow";

export function Info() {
  return (
    <div className="flex flex-col gap-1">
      <InfoRow type="email" />
      <InfoRow type="linkedin" />
      <InfoRow type="github" />
    </div>
  );
}

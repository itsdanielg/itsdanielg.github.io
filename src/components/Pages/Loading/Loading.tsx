import { Loader } from "@/components/Atoms";

export function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader size="page" />
    </div>
  );
}

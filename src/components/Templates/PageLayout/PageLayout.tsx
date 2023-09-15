import { Navigation } from "@/components/Templates";

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <div className={`${className} w-full h-full overflow-y-auto overflow-x-hidden`}>{children}</div>
    </>
  );
}

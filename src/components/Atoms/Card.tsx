interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`${className} bg-white rounded-md shadow-xl overflow-hidden`}>
      {children}
    </div>
  );
}

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function Image({ src, alt = "", className = "", ...props }: ImageProps) {
  return (
    <img
      {...props}
      className={`${className} object-contain w-full h-full select-none`}
      src={src}
      alt={alt}
    />
  );
}

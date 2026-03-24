import Image from "next/image";

export default function Logo({
  width = 176,
  height = 80,
  src = "/logo.svg",
  className = "",
  alt = "Logo Dra. Rafaela Mazieiro - Dermatologista",
  ...props
}) {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      className={className}
      alt={alt}
      {...props}
    />
  )
};
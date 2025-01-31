import Image from "next/image";

export default function SectionTop() {
  return(
    <div>
      <Image src="/rafa.png" layout="intrinsic" objectFit="contain" alt="Foto Rafaela Mazieiro" quality={100} width={436} height={654}/>
    </div>
  );
};
import Image from "next/image";

export default function Contacts() {
  return(
    <Image 
                src="/rafa.png" 
                alt="Foto Rafaela Mazieiro" 
                unoptimized 
                quality={100} 
                width={662}
                height={1000}/>
  )
}
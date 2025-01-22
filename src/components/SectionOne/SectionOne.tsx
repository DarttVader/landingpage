import Image from "next/image";
import Sidebar from "./Sidebar/Sidebar";

export default function() {
  return(
    <div className="flex h-[50rem]">
      <Sidebar>
      </Sidebar>
      <div className="ml-auto flex justify-items-end justify-end">
        <Image
        className="bg-white"
        alt="Photo of rafaela"
        objectFit="cover"
        layout="responsive"
        width={425}
        height={614}
        src="/img1.svg"
        quality={100}  
        ></Image>
      </div>
    </div>
  );
};
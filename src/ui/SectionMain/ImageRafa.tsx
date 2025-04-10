import Image from "next/image";
import ImgRafa from "public/rafa2.svg";

const ImageRafa = () => {
  return (
    <div
      className="w-fit h-full min-w-100 min-h-96 md:order-2 order-1"
    >
      <Image
        priority
        unoptimized
        quality={100}
        src={ImgRafa}
        alt="Foto Rafaela Mazieiro"
        className="object-cover w-auto md:h-screen object-center z-7 lg:relative"
      />
    </div>
  );
};

export default ImageRafa;




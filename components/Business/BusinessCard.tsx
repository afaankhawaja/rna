import Image from "next/image";
import CardOverlay from "./CardOverlay";

interface BusinessCardProps {
  title: string;
  image: string;
  overlay?: string;
  logo?: string;
  url?:string;
}

const BusinessCard = ({
  title,
  image,
  overlay = "bg-black/40",
  logo = "/placeholder-logo.png",
  url='/'
}: BusinessCardProps) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      h-[300px]
      md:h-[620px]
      cursor-pointer
      "
    >
      <a href={url}>
      {/* Background */}

      <Image
        src={image}
        alt={title}
        fill
        className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
        "
      />

      {/* Overlay */}

      <CardOverlay overlay={overlay} />

      {/* Content */}

      <div
        className="
        absolute
        inset-0
        z-20
        flex
        flex-col
        items-center
        justify-center
        "
      >
        {/* Logo */}

        <div
          className="
          relative
          w-36
          h-36
          md:w-5xl
          md:h-3/4
          "
        >
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Title */}

      </div>
      </a>
    </div>
  );
};

export default BusinessCard;
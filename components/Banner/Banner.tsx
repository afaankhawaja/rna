import Image from "next/image";
import BackgroundText from "../Hero/BackgroundText";

const Banner = () => {
  return (
    <section
      className="
      relative
      h-screen
      overflow-hidden
      z-30
      "
    >
      {/* Image */}

      <Image
        src="/assets/images/about.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/50" />

      {/* Background Text */}

      <BackgroundText
      />
    </section>
  );
};

export default Banner;
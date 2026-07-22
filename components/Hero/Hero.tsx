import Image from "next/image";
import BackgroundText from "./BackgroundText";

const Hero = () => {
  return (
    <section
      className="
      relative
      h-screen
      w-screen
      bg-(--deep-teal)
      overflow-hidden
      flex
      items-center
      justify-center
    "
    >
      {/* Background Text */}

      <BackgroundText
      />

      {/* Center Content */}

      <div
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        w-screen
        h-screen
      "
      >
        {/* Logo */}

        <div
          className="
          relative
          
overflow-clip   
          w-screen
          h-screen

        "
        >
          <Image
            src="/assets/icons/RNA All Logos-02.svg"
            alt="Logo"
            fill
            className="object-contain w-full h-full scale-125"
            priority
            
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
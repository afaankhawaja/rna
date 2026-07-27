import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function RnaProductionPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-mont overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col items-center justify-end bg-black pb-20 md:pb-28">
        <Image
          src="/assets/images/card-production.jpg"
          alt="RNA Production Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="z-10 flex flex-col items-center mt-32 md:mt-48">
          <div className="relative w-56 h-56 md:w-80 md:h-80 mb-2 md:mb-4 drop-shadow-2xl">
            <Image
              src="/assets/images/RNA-Production-02.png"
              alt="RNA Production Logo"
              fill
              className="object-cover scale-130"
              priority
            />
          </div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-4xl tracking-[0.1em] font-normal uppercase text-center px-4 drop-shadow-lg">
            RNA PRODUCTION (PHOTOGRAPHY STUDIO)
          </h1>
        </div>
      </section>

      {/* Slanted Divider / About Us Section */}
      <section id="about" className="relative bg-white pt-10 md:pt-2 pb-24 md:pb-32 px-6 md:px-12 lg:px-10">
        {/* Slanted element at the top using CSS clip-path */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 0 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mont uppercase text-(--deep-teal) mb-10">
            About Us
          </h2>
          <div className="space-y-4 text-(--deep-teal) leading-8 text-base font-mont font-normal lg:text-lg">
            <p>
              Welcome to RNA Production, a creative photography and videography company based in Jeddah, Saudi Arabia, dedicated to capturing life's most memorable moments with creativity, passion, and professionalism. We specialize in producing high-quality visual content that tells compelling stories and preserves memories that last a lifetime.
            </p>
            <p>
              Our services include wedding photography and videography, event photography and videography, model photography, and fashion photography for individuals, brands, designers, and businesses looking to showcase their vision through stunning imagery. From weddings and corporate events to fashion campaigns and portfolio shoots, our team combines artistic creativity with professional expertise to deliver exceptional results.
            </p>
            <p>
              At RNA Production, we believe every project is unique. We work closely with our clients to understand their style, goals, and expectations, ensuring every photograph and video reflects their personality and vision. Using modern equipment, creative techniques, and a commitment to excellence, we create visuals that leave a lasting impression.
            </p>
            <p>
              Whether you are celebrating a wedding, hosting a special event, building a modeling portfolio, launching a fashion collection, or creating content for your brand, RNA Production is dedicated to bringing your story to life through powerful and captivating imagery.
            </p>
            <p className="font-medium text-[var(--dark-slate)]">
              RNA Production – Capturing Moments, Creating Memories.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-[var(--deep-teal)] pt-16 md:pt-20 pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        {/* Slanted element connecting white and teal section */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0 0l1200 120H0V0z" className="fill-[var(--deep-teal)]"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl text-white font-medium mb-12 uppercase tracking-wide">
            Contact For More Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <ContactForm />
            <div className="w-full min-h-[400px] lg:min-h-full rounded-lg overflow-hidden shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467794.69747209776!2d39.066498522307525!3d21.543419574883307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118ab!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1714246830000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

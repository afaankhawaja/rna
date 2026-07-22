import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function RnaServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-mont overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col items-center justify-end bg-black pb-20 md:pb-28">
        <Image
          src="/assets/images/card-services.jpg"
          alt="RNA Services Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="z-10 flex flex-col items-center mt-32 md:mt-48">
          <div className="relative w-56 h-56 md:w-80 md:h-80 mb-2 md:mb-4 drop-shadow-2xl">
            <Image
              src="/assets/images/RNA-Services-02.png"
              alt="RNA Services Logo"
              fill
              className="object-cover scale-130"
              priority
            />
          </div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-4xl tracking-[0.1em] font-normal uppercase text-center px-4 drop-shadow-lg">
            RNA SERVICES (CONSULTANCY FIRM)
          </h1>
        </div>
      </section>

      {/* Slanted Divider / About Us Section */}
      <section className="relative bg-white pt-10 md:pt-2 pb-24 md:pb-32 px-6 md:px-12 lg:px-10">
        {/* Slanted element at the top using CSS clip-path */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 0 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl text-[var(--deep-teal)] font-medium mb-6 md:mb-10 uppercase tracking-wide">
            About Us
          </h2>
          <div className="space-y-6 md:space-y-8 text-[var(--deep-teal)] text-lg md:text-xl leading-relaxed">
            <p>
              Welcome to RNA Services, your trusted partner for government processing, documentation, and consultancy services in Jeddah, Saudi Arabia. We are dedicated to simplifying complex administrative procedures by providing reliable, efficient, and professional support to individuals, families, and businesses.
            </p>
            <p>
              With extensive knowledge of local regulations and government requirements, our team assists clients with a wide range of processing and consultancy needs, ensuring that applications, documentation, and official procedures are handled accurately and efficiently. We understand that navigating government processes can be time-consuming, which is why we focus on delivering seamless solutions that save our clients valuable time and effort.
            </p>
            <p>
              At RNA Services, we pride ourselves on our commitment to transparency, professionalism, and customer satisfaction. Our personalized approach allows us to understand each client's unique requirements and provide guidance tailored to their specific needs.
            </p>
            <p>
              Whether you require assistance with official documentation, administrative procedures, or professional consultancy services, RNA Services is committed to providing dependable support every step of the way.
            </p>
            <p className="font-medium text-[var(--dark-slate)]">
              RNA Services – Simplifying Processes, Delivering Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-[var(--deep-teal)] pt-16 md:pt-20 pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
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

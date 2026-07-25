import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function RnaCondotelsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-mont overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col items-center justify-end bg-black pb-20 md:pb-28">
        <Image
          src="/assets/images/card-condotels.jpg"
          alt="RNA Condotels Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="z-10 flex flex-col items-center mt-32 md:mt-48">
          <div className="relative w-56 h-56 md:w-80 md:h-80 mb-2 md:mb-4 drop-shadow-2xl">
            <Image
              src="/assets/images/RNA-Condotels-02.png"
              alt="RNA Condotels Logo"
              fill
              className="object-cover scale-130"
              priority
            />
          </div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-4xl tracking-[0.1em] font-normal uppercase text-center px-4 drop-shadow-lg">
            RNA Condotel (Service Apartments)
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
          <h2 className="text-3xl md:text-4xl text-[var(--deep-teal)] font-medium mb-6 md:mb-10 uppercase tracking-wide">
            About Us
          </h2>
          <div className="space-y-6 md:space-y-8 text-[var(--deep-teal)] text-lg md:text-xl leading-relaxed">
            <p>
              Welcome to RNA Condotel, where comfort, convenience, and quality living come together to create a truly exceptional stay experience. Located on Old Makkah Road, Jeddah, Saudi Arabia, 22525, RNA Condotel offers modern and fully furnished service apartments designed for both short-term and long-term stays.
            </p>
            <p>
              We provide a variety of accommodation options to suit different needs and lifestyles, including 2-bedroom apartments, 1-bedroom apartments, and studio apartments. Each unit is thoughtfully designed to offer a comfortable, private, and relaxing environment, making it ideal for families, business travelers, and individual guests alike.
            </p>
            <p>
              In addition to our Old Makkah Road property, we also offer premium apartments in Ar Rawdah, near the Egypt Consulate on Madinah Road, behind Saadeddin Pastry, providing guests with another convenient location in one of Jeddah’s most sought-after neighborhoods.
            </p>
            <p>
              At RNA Condotel, we are committed to delivering excellent hospitality through well-maintained accommodations, and attentive customer service. Our strategic locations provide convenient access to key business districts, shopping destinations, dining venues, and major attractions throughout Jeddah.
            </p>
            <p>
              Whether you are visiting for business, relocation, or leisure, RNA Condotel offers the perfect balance of comfort, convenience, and value.
            </p>
            <p className="font-medium text-[var(--dark-slate)]">
              RNA Condotel – Your Home Away From Home in Jeddah.
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

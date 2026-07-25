import Image from "next/image";
import SectionContainer from "../Shared/SectionContainer";
import SectionHeading from "../Shared/SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="
      bg-white
      py-20
      relative
      "
    >
      <div className="absolute inset-0 z-0 opacity-5 translate-y-26">
        <Image 
          src="/assets/icons/rna-backgroun-text.svg" 
          alt="background logo" 
          fill 
          className="object-contain scale-[225%] rotate-12" 
        />
      </div>
      <SectionContainer >

        <SectionHeading
          title="About Us"
        />

        <div
          className="
          space-y-4
          text-(--deep-teal)
          leading-8
          text-base
          font-mont
          font-normal
          lg:text-lg
          "
        >
          <p>
          RNA Traders is a diversified business group based in Jeddah, Saudi Arabia, committed to delivering reliable, customer-focused solutions across multiple industries. Built on a foundation of trust, professionalism, and excellence, RNA Traders has grown into a dynamic organization with several specialized divisions, each dedicated to serving the unique needs of its clients.
          </p>

          <p>
          Our group operates through a range of successful business units, including RNA Travels, providing travel solutions, flight bookings, holiday packages, and visa assistance; RNA Condotel, offering comfortable and fully furnished service apartments in prime locations across Jeddah; RNA Production, delivering professional photography, videography, and creative media services; and RNA Services, specializing in government-related processing, documentation, business support, and consultancy services.
          </p>

          <p>
          By bringing diverse services under one trusted brand, RNA Traders offers convenience, quality, and personalized support to individuals, families, and businesses alike. Our experienced team is dedicated to maintaining the highest standards of service while continuously expanding our capabilities to meet the evolving needs of our clients.
          </p>

          <p>
          At RNA Traders, our mission is to create lasting relationships through integrity, innovation, and exceptional customer service, making us a trusted partner for a wide range of personal and business requirements.
          </p>

          <p className="font-bold font-mont text-(--deep-teal)">
            RNA Traders — Connecting Services, Creating Values.
          </p>

        </div>

      </SectionContainer>
    </section>
  );
};

export default About;
import BusinessCard from "./BusinessCard";

const BusinessGrid = () => {
  return (
    <section>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2

        max-w-screen
        mx-auto
        "
      >
        <BusinessCard
          title="Travels"
          image="/assets/images/card-travel.jpg"
          overlay="bg-black/40"
          logo="/assets/images/RNA-Travels-02.png"
          url="/rna-travels"
        />

        <BusinessCard
          title="Condotels"
          image="/assets/images/card-condotels.jpg"
          overlay="bg-cyan-700/40"
          logo="/assets/images/RNA-Condotels-02.png"
          url="/rna-condotels"
        />

        <BusinessCard
          title="Services"
          image="/assets/images/card-services.jpg"
          overlay="bg-cyan-900/50"
          logo="/assets/images/RNA-Services-02.png"
          url="/rna-services"
        />

        <BusinessCard
          title="Production"
          image="/assets/images/card-production.jpg"
          overlay="bg-black/50"
          logo="/assets/images/RNA-Production-02.png"
          url="/rna-production"
        />

      </div>

    </section>
  );
};

export default BusinessGrid;
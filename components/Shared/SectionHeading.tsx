interface Props {
    title: string;
  }
  
  const SectionHeading = ({ title }: Props) => {
    return (
      <h2
        className="
        text-3xl
        md:text-4xl
        lg:text-5xl
        font-mont
        
        uppercase
        // tracking-widest
        text-(--deep-teal)
        mb-10
        "
      >
        {title}
      </h2>
    );
  };
  
  export default SectionHeading;
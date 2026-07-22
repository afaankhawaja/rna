interface Props {
    children: React.ReactNode;
  }
  
  const SectionContainer = ({ children }: Props) => {
    return (
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        sm:px-0
        lg:px-0
        xl:px-0
        relative z-10
        "
      >
        {children}
      </div>
    );
  };
  
  export default SectionContainer;
interface CardOverlayProps {
    overlay?: string;
  }
  
  const CardOverlay = ({
    overlay = "bg-black/40",
  }: CardOverlayProps) => {
    return (
      <div
        className={`
          absolute
          inset-0
          ${overlay}
          transition-all
          duration-500
          group-hover:bg-black/20
        `}
      />
    );
  };
  
  export default CardOverlay;
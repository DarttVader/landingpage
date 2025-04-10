interface TextProps {
  title?: string;
  className?: string;
};

const TextCards: React.FC<TextProps> = ({ title = "Tratamentos", className = ""
}) => {
  return (
    <h1
      className={`text-center tracking-wide self-center mb-5 ${className}`}
    >
      {title}
    </h1>
  );
};

export default TextCards;

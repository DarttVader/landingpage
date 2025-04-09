import { easeInOut, keyframes, motion } from "framer-motion";

interface TextProps {
  title?: string;
  className?: string;
};

const TextCards: React.FC<TextProps> = ({ title = "Tratamentos", className = ""
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0, rotate: 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, type: keyframes }}
      className={`text-center tracking-wide self-center mb-5 ${className}`}
    >
      {title}
    </motion.h1>
  );
};

export default TextCards;

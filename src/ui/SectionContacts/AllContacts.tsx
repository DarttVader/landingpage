import { easeInOut, keyframes, motion } from "framer-motion";
import { ReactNode } from "react";

interface AllContactsProps {
  children: ReactNode;
};

const AllContacts = ({ children }: AllContactsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-auto w-1/2 flex flex-col max-1170:w-full"
      transition={{ duration: 0.3, ease: easeInOut, type: keyframes }}>
      {children}
    </motion.div>
  );
};

export default AllContacts;
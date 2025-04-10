import { ReactNode } from "react";

interface AllContactsProps {
  children: ReactNode;
};

const AllContacts = ({ children }: AllContactsProps) => {
  return (
    <div
      className="h-auto w-1/2 flex flex-col max-1170:w-full">
      {children}
    </div>
  );
};

export default AllContacts;
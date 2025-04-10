import { Address, AllContacts, Contacts, Map } from "@/exports";

const SectionContacts = () => {
  return (
    <section
      id="section-contacts"
      className="w-full md:h-screen flex md:flex-row md:space-x-10 justify-center md:items-center md:px-20 
        md:py-20 h-auto flex-col space-y-10 items-end px-4 py-10">
      <AllContacts>
        <Address />
        <Contacts />
      </AllContacts>
      <Map />
    </section>
  );
};

export default SectionContacts;

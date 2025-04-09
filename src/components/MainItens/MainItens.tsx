import { SocialMedia, TopClick } from "@/exports";

const MainItens = () => {
  return (
    <div
      className="flex flex-col min-w-14 min-h-56 fixed lg:bottom-4 lg:left-4 justify-between z-10
        bottom-2 left-2">
      <SocialMedia />
      <TopClick />
    </div>
  );
};

export default MainItens;
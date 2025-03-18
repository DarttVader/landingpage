import { FC } from "react";

interface SocialIconProps {
  Href: string;
  Icon: React.ElementType;  // Mantendo como React.ElementType para suportar react-icons
  Color: string;
  Size: string;
  FatherWidth: string;
  FatherHeight: string;
  PaddingIcon: string;
  Target?: string;
  PaddingAnim?: string;
  Rounded?: string;
  BgColorIcon?: string;
}

const SocialIcon: FC<SocialIconProps> = ({
  Href,
  Icon,
  Color,
  Size,
  FatherWidth,
  FatherHeight,
  PaddingIcon,
  Target = "", // Valor default vazio
  PaddingAnim = "", // Valor default vazio
  Rounded = "full", // Valor default "full"
  BgColorIcon = "bg-custom-radial", // Valor default "bg-custom-radial"
}) => {
  // Condicional para adicionar href e target somente se não forem vazios
  const linkProps = Href && Href !== "" ? {
    href: Href, target: Target && Target !== "" ? Target :
      undefined, rel: "noopener noreferrer"
  } : {};
  // Condicional para o ícone de borda animada
  const borderAnimProps = PaddingAnim && PaddingAnim !== "" ? `p-${PaddingAnim}` : "";
  // Condicional para o ícone de fundo
  const bgColorIconClass = BgColorIcon && BgColorIcon !== "" ? BgColorIcon : "bg-custom-radial";
  // Condicional para o arredondamento
  const roundedClass = Rounded && Rounded !== "" ? Rounded : "full";

  return (
    <a {...linkProps} aria-label={`Go to ${Href || "social link"}`}>
      {/* Container */}
      <div className={`relative flex items-center justify-center w-${FatherWidth} h-${FatherHeight}`}>
        {/* Borda animada */}
        <div className={`absolute h-full w-full rounded-full bg-conic-custom animate-spin-slow 
          blur-min ${borderAnimProps}`} />
        {/* Ícone central */}
        <div className={`absolute flex p-${PaddingIcon} rounded-${roundedClass} 
          bg-${bgColorIconClass}`}>
          <Icon color={Color} size={Size} />
        </div>
      </div>
    </a>
  );
};

// Usando memo para evitar renderizações desnecessárias
SocialIcon.displayName = "SocialIcon";
export default SocialIcon;


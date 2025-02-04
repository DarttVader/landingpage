"use client"

const IconMenu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="group"
      {...props}
    >
      <rect y="3.6" rx="1" className="h-[1.6] w-[24] group-hover:-translate-y-[1px]"></rect>
      <rect y="10.6" rx="1" className="h-[1.6] w-[24]"></rect>
      <rect y="17.6" rx="1" className="h-[1.6] w-[24] group-hover:translate-y-[1px]"></rect>
    </svg>
  )
};

export default IconMenu;

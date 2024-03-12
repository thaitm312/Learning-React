import { MouseEventHandler, ReactNode } from "react";

export interface TabButtonProps {
  children: ReactNode;
  onSelect?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

const TabButton = ({ children, onSelect, isActive = false }: TabButtonProps) => {
  const cssClass =
    "cursor-pointer rounded-[6px] border-none bg-transparent p-[0.5rem_1rem] font-Roboto font-[1rem] text-[#a18aba] transition-[all_0.2s_ease-in-out] hover:bg-[#1b082f] hover:text-[#ebe7ef] [&.active]:bg-[#7925d3] [&.active]:text-[#ebe7ef]";

  return (
    <>
      <li>
        <button className={isActive ? `active ${cssClass}` : cssClass} onClick={onSelect}>
          {children}
        </button>
      </li>
    </>
  );
};

export default TabButton;

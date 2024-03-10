import { MouseEventHandler, ReactNode } from "react";

export interface TabButtonProps {
  children: ReactNode;
  onSelect?: MouseEventHandler<HTMLButtonElement>;
}

const TabButton = ({ children, onSelect }: TabButtonProps) => {
  return (
    <>
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    </>
  );
};

export default TabButton; 

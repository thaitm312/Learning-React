import mainLogo from "../../assets/react-core-concepts.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="mb-[3rem] mt-[3rem] text-center">
        <img
          src={mainLogo}
          className="m-auto h-[5em] w-[10em] object-cover"
          alt="Stylized atom"
        />
        <h1 className="mt-[6px] font-Roboto text-[5rem] font-bold">
          React Essentials
        </h1>
        <p className="m-0 font-Roboto text-[1.25rem] text-[#8964b0]">
          Core React concepts you will need for almost any app you are going to
          build!
        </p>
      </header>
    </>
  );
};

export default Header;

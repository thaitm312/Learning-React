import mainLogo from "./assets/react-core-concepts.png";

function App() {
  return (
    <>
      <div>
        <header className="text-center mt-[3rem] mb-[3rem]">
          <img
            src={mainLogo}
            className="object-cover h-[5em] w-[10em] m-auto"
            alt="Stylized atom"
          />
          <h1 className="text-[5rem] font-Roboto font-bold mt-[6px]">
            React Essentials
          </h1>
          <p className="font-Roboto text-[#8964b0] m-0 text-[1.25rem]">
            Fundamental React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>

        <main className=" w-[90%] max-w-[50rem] m-auto">
          <h2 className="text-center font-Roboto mb-[1.5rem] text-[#a18aba] text-[1.5em] font-bold">
            Time to get started!
          </h2>
        </main>
      </div>
    </>
  );
}

export default App;

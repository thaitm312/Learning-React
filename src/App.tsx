import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import CoreConcept, { CoreConceptProps } from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

const App = () => {
  const [selectedContent, SetSelectedContent] = useState(
    "Please click a button",
  );
  function handleSelect(selectedButton: string) {
    SetSelectedContent(selectedButton);
    console.log(selectedContent);
  }

  return (
    <>
      <div>
        <Header />
        <main className="m-auto w-[90%] max-w-[50rem]">
          <section className="round-[6px] bg-[#140524] p-[2rem] shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            <h2 className="mb-[1.5rem] text-center font-Roboto text-[1.5em] font-bold text-[#a18aba] ">
              Core Concepts
            </h2>
            <ul className="m-0 flex list-none flex-wrap justify-center gap-[2rem] p-0">
              {CORE_CONCEPTS.map((concept: CoreConceptProps) => {
                return <CoreConcept key={concept.title} {...concept} />;
              })}
            </ul>
          </section>
          <section>
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect("Components")}>
                Components
              </TabButton>
              <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("Props")}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect("State")}>
                State
              </TabButton>
            </menu>
            {selectedContent}
          </section>
        </main>
      </div>
    </>
  );
};

export default App;

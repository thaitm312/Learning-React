import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept, { CoreConceptProps } from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

const App = () => {
  const [selectedContent, SetSelectedContent] = useState<string>();

  function handleSelect(selectedButton: string) {
    SetSelectedContent(selectedButton);
  }

  return (
    <>
      <Header />
      <main className="m-auto w-[90%] max-w-[50rem]">
        <section className="round-[6px] bg-[#140524] p-[2rem] shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          <h2 className="mb-[1.5rem] text-center font-Roboto text-[1.5em] font-bold text-[#a18aba] ">Core Concepts</h2>
          <ul className="m-0 flex list-none flex-wrap justify-center gap-[2rem] p-0">
            {CORE_CONCEPTS.map((concept: CoreConceptProps) => {
              return <CoreConcept key={concept.title} {...concept} />;
            })}
          </ul>
        </section>
        <section className="m-[3rem_auto]">
          <h2 className="mb-[24px] text-left font-Roboto text-[24px] font-bold text-[#a18aba]">Examples</h2>
          <menu className="m-[1rem_0_1rem_0] flex list-none gap-[0.5rem] p-0">
            <TabButton isActive={selectedContent === "Components"} onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton isActive={selectedContent === "Jsx"} onSelect={() => handleSelect("Jsx")}>
              JSX
            </TabButton>
            <TabButton isActive={selectedContent === "Props"} onSelect={() => handleSelect("Props")}>
              Props
            </TabButton>
            <TabButton isActive={selectedContent === "State"} onSelect={() => handleSelect("State")}>
              State
            </TabButton>
          </menu>
          {!selectedContent && (
            <div>
              <p>Please select a topic </p>
            </div>
          )}
          {selectedContent && (
            <div className="shadow-[0_2px_8px_rgba(0, 0, 0, 0.3)] rounded-[6px] bg-[#2f1d43] p-[1rem]">
              <h3 className="m-0 font-Roboto text-[24px]">{EXAMPLES[selectedContent!].title}</h3>
              <p className="m-[16px_0]">{EXAMPLES[selectedContent!].description}</p>
              <pre className="m-[13px_0]">
                <code className="font-[1rem]">{EXAMPLES[selectedContent!].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default App;

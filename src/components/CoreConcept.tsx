import { FC } from "react";

export interface coreConceptParams {
  image: string;
  title: string;
  description: string;
}

const CoreConcept: FC<coreConceptParams> = (props: coreConceptParams) => {
  return (
    <>
      <li className="w-[10rem] text-center">
        <img
          src={props.image}
          alt={props.title}
          className="h-[4rem] w-[6rem] object-cover m-auto"
        />
        <h3 className="mb-[0.5rem] mt-[0.5rem]">{props.title}</h3>
        <p className="text-[0.9rem]">{props.description}</p>
      </li>
    </>
  );
};

export default CoreConcept;

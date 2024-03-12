export interface CoreConceptProps {
  image: string;
  title: string;
  description: string;
}

const CoreConcept = ({ image, title, description }: CoreConceptProps) => {
  return (
    <>
      <li className="w-[10rem] text-center">
        <img src={image} alt={title} className="m-auto h-[4rem] w-[6rem] object-cover" />
        <h3 className="mb-[0.5rem] mt-[0.5rem]">{title}</h3>
        <p className="text-[0.9rem]">{description}</p>
      </li>
    </>
  );
};

export default CoreConcept;

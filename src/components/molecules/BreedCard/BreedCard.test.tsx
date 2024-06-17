import { render, screen, fireEvent } from "@testing-library/react";
import BreedCard from ".";

interface BreedCardProps {
  id: number;
  referenceImageId: string;
  image: string;
  name: string;
  temperament: string;
  moreInfo: string;
}

const sampleProps: BreedCardProps = {
  id: 1,
  referenceImageId: "BkE6Wg5E7",
  image: "dog.jpg",
  name: "Sample Breed",
  temperament: "Friendly and Energetic",
  moreInfo: "Additional information about the breed",
};

test("renders BreedCard with default state", () => {
  render(
    <BreedCard
      id={sampleProps.id}
      referenceImageId={sampleProps.referenceImageId}
      image={sampleProps.image}
      name={sampleProps.name}
      temperament={sampleProps.temperament}
      moreInfo={sampleProps.moreInfo}
    />
  );

  const imageElement = screen.getByAltText(sampleProps.name);
  const nameElement = screen.getByText(sampleProps.name);
  const temperamentElement = screen.getByText(sampleProps.temperament);
  const moreInfoElement = screen.queryByText(sampleProps.moreInfo);

  expect(imageElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(temperamentElement).toBeInTheDocument();
  expect(moreInfoElement).toBeNull();
});

test("displays more info on hover", () => {
  render(
    <BreedCard
      id={sampleProps.id}
      referenceImageId={sampleProps.referenceImageId}
      image={sampleProps.image}
      name={sampleProps.name}
      temperament={sampleProps.temperament}
      moreInfo={sampleProps.moreInfo}
    />
  );

  const breedCard = screen.getByText(sampleProps.name);

  fireEvent.mouseEnter(breedCard);

  const moreInfoElement = screen.getByText(sampleProps.moreInfo);

  expect(moreInfoElement).toBeInTheDocument();
});

test("hides more info on mouse leave", () => {
  render(
    <BreedCard
      id={sampleProps.id}
      referenceImageId={sampleProps.referenceImageId}
      image={sampleProps.image}
      name={sampleProps.name}
      temperament={sampleProps.temperament}
      moreInfo={sampleProps.moreInfo}
    />
  );

  const breedCard = screen.getByText(sampleProps.name);

  fireEvent.mouseEnter(breedCard);

  const moreInfoElement = screen.getByText(sampleProps.moreInfo);

  fireEvent.mouseLeave(breedCard);

  expect(moreInfoElement).not.toBeInTheDocument();
});

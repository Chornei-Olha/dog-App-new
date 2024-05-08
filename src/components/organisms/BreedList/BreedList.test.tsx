import { render, screen } from '@testing-library/react';
import BreedList from '.';

const mockBreedsData = [
  {
    id: 1,
    name: 'Breed 1',
    image: 'image1.jpg',
    temperament: 'Temperament 1',
    moreInfo: 'More info 1'
  },
  {
    id: 2,
    name: 'Breed 2',
    image: 'image2.jpg',
    temperament: 'Temperament 2',
    moreInfo: 'More info 2'
  }
];

jest.mock('../../../services/images', () => ({
  useGetImagesIdQuery: jest.fn(() => ({
    data: mockBreedsData,
    isLoading: false
  }))
}));

jest.mock('../../../services/breeds', () => ({
  useGetBreedsQuery: jest.fn(() => ({ data: mockBreedsData, isLoading: false }))
}));

describe('BreedList Component', () => {
  it('renders BreedCards and Pagination correctly', () => {
    render(<BreedList breedsData={mockBreedsData} />);

    const breedCards = screen.getAllByTestId('breed-card');
    expect(breedCards).toHaveLength(mockBreedsData.length);

    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });
});

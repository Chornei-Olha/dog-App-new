import React, { useState, useMemo } from 'react';
import { Pagination } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import BreedCard from '../../molecules/BreedCard';
import { useGetBreedsQuery } from '../../../services/breeds';
import { shadowTopWrap, shadowBottomWrap } from './styled';
import shadowBottom from '../../../assets/img/mainPage/shadow/shadow-1.svg';
import shadowTop from '../../../assets/img/mainPage/shadow/shadow-2.svg';
import { Loader } from '../../atoms/Loader';

const perPage = 6;

const BreedList = () => {
  const gridStyles = {
    maxWidth: '1200px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    gridGap: '22px',
    margin: '0 auto',
    padding: '191px 15px 0 15px',
    overflowX: 'hidden'
  };
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const { data: breeds, isLoading } = useGetBreedsQuery();
  const [page, setPage] = useState(
    parseInt(searchParams.get('currentPage')) || 1
  );

  const breedSlice = useMemo(
    () => breeds?.slice((page - 1) * perPage, page * perPage) || [],
    [breeds, page]
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    searchParams.set('currentPage', String(value));
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <img src={shadowTop} alt="" style={shadowTopWrap} />

      <div className="breed-list" style={gridStyles}>
        {breedSlice.map(breed => (
          <BreedCard
            key={breed.id}
            id={breed.id}
            name={breed.name}
            temperament={breed.temperament}
            referenceImageId={breed.reference_image_id}
          />
        ))}
        {breeds && breeds.length && breeds.length > perPage && (
          <Pagination
            count={Math.ceil((breeds.length || 0) / perPage)}
            page={page}
            onChange={handlePageChange}
            sx={{
              margin: '20px auto 20px auto'
            }}
          />
        )}
      </div>
      <img src={shadowBottom} alt="" style={shadowBottomWrap} />
      {isLoading && <Loader />}
    </div>
  );
};
export default BreedList;

import shadowBottom from '../../../assets/img/mainPage/shadow/shadow-1.svg';
import shadowTop from '../../../assets/img/mainPage/shadow/shadow-2.svg';
import { useGetFavoritesQuery } from '../../../services/favorite';
import { Loader } from '../../atoms/Loader';
import { FavoriteList } from '../FavoriteList';
import { Wrap, Container, ShadowTopWrap, ShadowBottomWrap } from './styled';

export const FavoritePage = () => {
  const { data, isLoading } = useGetFavoritesQuery();

  return (
    <Wrap>
      <ShadowTopWrap>
        <img src={shadowTop} alt="" />
      </ShadowTopWrap>
      <Container>
        {isLoading && <Loader />}
        {data && <FavoriteList favoritesData={data} />}
      </Container>
      <ShadowBottomWrap>
        <img src={shadowBottom} alt="" />
      </ShadowBottomWrap>
    </Wrap>
  );
};

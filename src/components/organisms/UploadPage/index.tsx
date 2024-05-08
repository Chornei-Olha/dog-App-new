import shadowBottom from '../../../assets/img/mainPage/shadow/shadow-1.svg';
import shadowTop from '../../../assets/img/mainPage/shadow/shadow-2.svg';
import { useUploadImagesListQuery } from '../../../services/images';
import { Loader } from '../../atoms/Loader';
import { UploadList } from '../../molecules/UploadList';
import { Wrap, Container, ShadowTopWrap, ShadowBottomWrap } from './styled';

export const UploadPage = () => {
  const { data, isLoading } = useUploadImagesListQuery({
    limit: 10,
    page: 0
  });

  return (
    <Wrap>
      <ShadowTopWrap>
        <img src={shadowTop} alt="" />
      </ShadowTopWrap>
      <Container>
        {isLoading && <Loader />}
        {data && <UploadList data={data} />}
      </Container>
      <ShadowBottomWrap>
        <img src={shadowBottom} alt="" />
      </ShadowBottomWrap>
    </Wrap>
  );
};

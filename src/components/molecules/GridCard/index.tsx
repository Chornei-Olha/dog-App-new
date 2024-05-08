import { CardMedia, alpha } from '@mui/material';
import theme from '../../../theme/theme';
import { CardBorder, CardBox } from './styled';
import { GridCardActions } from '../GridCardActions';

export interface GridCardProps {
  id: number | string;
  imgUrl: string;
  isFavorite?: boolean;
  cardType?: 'favorite' | 'upload';
}

export const GridCard = ({
  id,
  imgUrl,
  isFavorite = false,
  cardType
}: GridCardProps) => (
  <CardBorder showHovered boxShadow={alpha(theme.palette.primary.main, 1)}>
    <CardBox>
      <CardMedia
        component="img"
        image={imgUrl || 'http://via.placeholder.com/640x360'}
        alt="item"
        sx={{ height: '100%', objectFit: 'cover' }}
      />
      <GridCardActions id={id} isFavorite={isFavorite} cardType={cardType} />
    </CardBox>
  </CardBorder>
);

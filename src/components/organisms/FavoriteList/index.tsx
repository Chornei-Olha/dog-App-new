import { FavoritesResponse } from '../../../services/favorite';
import { GridCard } from '../../molecules/GridCard';
import { List, ListItem } from './styled';

interface FavoriteListProps {
  favoritesData: FavoritesResponse[];
}

export const FavoriteList = ({ favoritesData }: FavoriteListProps) => (
  <List>
    {(favoritesData || []).map(item => (
      <ListItem key={item.id}>
        <GridCard
          id={item.id}
          imgUrl={item.image.url}
          isFavorite
          cardType="favorite"
        />
      </ListItem>
    ))}
  </List>
);

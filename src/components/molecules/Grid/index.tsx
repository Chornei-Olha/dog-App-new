import { GridCard } from '../GridCard';
import { Images } from '../../../services/images';
import { Item, List } from './styled';

interface ListImagesProps extends Images {
  isFavorite: boolean;
}

export interface GridProps {
  listImages: ListImagesProps[];
}

export const Grid = ({ listImages }: GridProps) => (
  <List>
    {(listImages || []).map(item => (
      <Item key={item.id}>
        <GridCard imgUrl={item.url} id={item.id} isFavorite={item.isFavorite} />
      </Item>
    ))}
  </List>
);

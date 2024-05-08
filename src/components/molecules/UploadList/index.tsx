import { UploadImage } from '../../../services/images';
import { GridCard } from '../GridCard';
import { List, ListItem } from './styled';

interface UploadListProps {
  data: UploadImage[];
}

export const UploadList = ({ data }: UploadListProps) => (
  <List>
    {(data || []).map(item => (
      <ListItem key={item.id}>
        <GridCard id={item.id} imgUrl={item.url} isFavorite cardType="upload" />
      </ListItem>
    ))}
  </List>
);

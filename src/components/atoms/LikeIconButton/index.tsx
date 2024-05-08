import { ButtonBase } from '@mui/material';
import { FunctionComponent } from 'react';
import { AddLikeIconButton } from '../../../icons/AddLikeIconButton';

export interface ILikeIconButtonProps {
  className?: string;
  like?: string;
  dislike?: string;
}

const LikeIconButton: FunctionComponent<ILikeIconButtonProps> = ({
  like,
  dislike,
  className
}) => {
  let modifiersClassName = '';

  if (like) {
    modifiersClassName += 'like';
  }

  if (dislike) {
    modifiersClassName += 'dislike';
  }

  return (
    <ButtonBase
      className={` iconButton ${modifiersClassName} ${className || ''}`}
    >
      <AddLikeIconButton />
    </ButtonBase>
  );
};
export default LikeIconButton;

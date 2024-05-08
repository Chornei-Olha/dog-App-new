import { composeStories } from '@storybook/react';
import * as stories from './Pagination.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('atoms/Pagination', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});

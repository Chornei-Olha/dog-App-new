import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('Button', () => {
  const { Primary, Secondary } = composeStories(stories);
  testSnapshot(<Primary />);
  testSnapshot(<Secondary />);
});

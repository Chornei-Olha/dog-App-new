import { composeStories } from '@storybook/react';
import * as stories from './Link.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('atoms/Link', () => {
  const { LinkMore, NavLink } = composeStories(stories);
  testSnapshot(<LinkMore />);
  testSnapshot(<NavLink />);
});

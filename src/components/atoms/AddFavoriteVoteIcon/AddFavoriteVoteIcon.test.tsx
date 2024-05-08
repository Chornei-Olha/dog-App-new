import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './AddFavoriteVoteIcon.stories';

describe('AddFavoriteVoteIcon', () => {
  const { Primary } = composeStories(stories);
  it('should match snapshot Primary', () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });
});

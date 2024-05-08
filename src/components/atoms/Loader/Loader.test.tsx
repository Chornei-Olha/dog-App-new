import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './Loader.stories';

describe('Loader', () => {
  const { ComponentLoader } = composeStories(stories);
  it('should match snapshot Loader', () => {
    const { container } = render(<ComponentLoader />);
    expect(container).toMatchSnapshot();
  });
});

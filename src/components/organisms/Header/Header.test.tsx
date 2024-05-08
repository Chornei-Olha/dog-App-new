import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './Header.stories';

describe('RHeader', () => {
  const { RHeader } = composeStories(stories);
  it('should match snapshot RHeader', () => {
    const { container } = render(
      <BrowserRouter>
        <RHeader />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

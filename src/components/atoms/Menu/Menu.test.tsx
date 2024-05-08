import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './Menu.stories';

describe('Menu', () => {
  const { MenuNav } = composeStories(stories);
  it('should match snapshot Menu', () => {
    const { container } = render(
      <BrowserRouter>
        <MenuNav />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

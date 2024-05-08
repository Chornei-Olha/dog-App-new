import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import * as stories from './FavoritePage.stories';
import { store } from '../../../services/store';

describe('FavoritePage', () => {
  const { Page } = composeStories(stories);
  it('should match snapshot FavoritePage', () => {
    const { container } = render(
      <Provider store={store}>
        <Page />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

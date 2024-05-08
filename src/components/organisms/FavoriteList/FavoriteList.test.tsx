import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import * as stories from './FavoriteList.stories';
import { store } from '../../../services/store';

describe('FavoriteList', () => {
  const { List } = composeStories(stories);
  it('should match snapshot FavoriteList', () => {
    const { container } = render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

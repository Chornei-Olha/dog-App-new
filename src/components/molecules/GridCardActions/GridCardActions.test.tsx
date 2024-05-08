import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import * as stories from './GridCardActions.stories';
import { store } from '../../../services/store';

describe('GridCardActions', () => {
  const { Favorite } = composeStories(stories);
  it('should match snapshot GridCardActions for FavoriteCard', () => {
    const { container } = render(
      <Provider store={store}>
        <Favorite />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

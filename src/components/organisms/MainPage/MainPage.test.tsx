import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import * as stories from './MainPage.stories';
import { store } from '../../../services/store';

describe('MainPage', () => {
  const { Page } = composeStories(stories);
  it('should match snapshot MainPage', () => {
    const { container } = render(
      <Provider store={store}>
        <Page />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

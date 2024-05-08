import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as stories from './Grid.stories';
import { store } from '../../../services/store';

describe('Grid', () => {
  const { List } = composeStories(stories);
  test('should match snapshot Grid', () => {
    const { container } = render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

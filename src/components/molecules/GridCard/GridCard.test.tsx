import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as stories from './GridCard.stories';
import { store } from '../../../services/store';

describe('GridCard', () => {
  const { Main } = composeStories(stories);
  test('should match snapshot Main', () => {
    const { container } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

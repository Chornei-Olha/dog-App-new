import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as stories from './UploadList.stories';
import { store } from '../../../services/store';

describe('UploadList', () => {
  const { List } = composeStories(stories);
  test('should match snapshot UploadList', () => {
    const { container } = render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import * as stories from './UploadPage.stories';
import { store } from '../../../services/store';

describe('UploadPage', () => {
  const { Page } = composeStories(stories);
  it('should match snapshot UploadPage', () => {
    const { container } = render(
      <Provider store={store}>
        <Page />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

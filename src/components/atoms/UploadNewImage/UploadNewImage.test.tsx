import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import * as stories from './UploadNewImage.stories';
import { store } from '../../../services/store';

describe('UploadNewImage', () => {
  const { UploadImage } = composeStories(stories);
  it('should match snapshot UploadNewImage', () => {
    const { container } = render(
      <Provider store={store}>
        <UploadImage />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

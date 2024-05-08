import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { DogAppThemeProvider } from '../../theme';

export const testSnapshot = (el: ReactElement, name = 'Component') => {
  it(`should match snapshot ${name}`, () => {
    const { container, unmount } = render(
      <DogAppThemeProvider>{el}</DogAppThemeProvider>
    );
    expect(container).toMatchSnapshot();

    unmount();
    cleanup();
  });
};

import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import defaultTheme from './theme';

export const DogAppThemeProvider: FC<
  PropsWithChildren<{
    theme?: Theme;
  }>
> = ({ theme = defaultTheme, children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

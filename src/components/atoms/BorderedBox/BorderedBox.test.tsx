import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/';
import { alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import BorderedBox from '.';

const theme = createTheme();

describe('BorderedBox', () => {
  it('should render without errors', () => {
    render(<BorderedBox data-testid="bordered-box" showHovered={false} />);
    expect(screen.getByTestId('bordered-box')).toBeInTheDocument();
    expect('bordered-box').toMatchSnapshot();
  });

  it('the default state should be a black shadow', () => {
    render(<BorderedBox data-testid="bordered-box" showHovered={false} />);
    const borderedBox = screen.getByTestId('bordered-box');
    expect(borderedBox).toHaveStyle(
      `box-shadow: 6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
    );
    expect('bordered-box').toMatchSnapshot();
  });

  it('should have a black shadow when transmitting this props', () => {
    render(<BorderedBox data-testid="bordered-box" showHovered={false} />);
    const borderedBox = screen.getByTestId('bordered-box');
    userEvent.hover(borderedBox);
    expect(borderedBox).toHaveStyle(
      `box-shadow: 6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
    );
    expect('bordered-box').toMatchSnapshot();
  });

  it('should have a main shadow when transmitting this props', () => {
    render(<BorderedBox data-testid="bordered-box" showHovered />);
    const borderedBox = screen.getByTestId('bordered-box');
    userEvent.hover(borderedBox);
    expect(borderedBox).toHaveStyle(
      `box-shadow: 6px 6px 8px 0px ${alpha(theme.palette.primary.main, 1)}`
    );
    expect('bordered-box').toMatchSnapshot();
  });
});

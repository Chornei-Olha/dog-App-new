// import { render, fireEvent, screen } from '@testing-library/react';
// import ModalDialog from './index';
// import '@testing-library/jest-dom/';

// describe('ModalDialog component', () => {
//   it('renders with a title', () => {
//     render(<ModalDialog open onClose={() => {}} />);
//     const titleElement = screen.getByText('Upload a Dog image');
//     expect(titleElement).toBeInTheDocument();
//   });

//   it('closes when the Close button is clicked', () => {
//     const handleClose = jest.fn();
//     render(<ModalDialog open onClose={handleClose} />);
//     const closeButton = screen.getByText('Close');
//     expect(handleClose).not.toHaveBeenCalled();
//     fireEvent.click(closeButton);
//     expect(handleClose).toHaveBeenCalled();
//   });
// });

import { composeStories } from '@storybook/react';
import * as stories from './ModalDialog.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('atoms/ModalDialog', () => {
  const { Default } = composeStories(stories);
  testSnapshot(<Default />);
});

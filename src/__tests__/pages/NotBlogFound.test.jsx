import React from 'react';
import { render, screen } from '@testing-library/react';
import {describe, it} from 'vitest';
import NoBlogFound from '../../pages/NoBlogFound';

describe('NoBlogFound', () => {
  it('should render the component with the correct text', () => {
    const { container } = render(<NoBlogFound />);
    const container2 = container.firstChild;
    const typography = container2.firstChild;
    expect(typography).toHaveTextContent('No Blog Found');
  });


});

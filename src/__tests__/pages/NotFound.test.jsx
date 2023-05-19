import React from 'react';
//  import { render } from 'vitest';
import { render } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

describe('Test NotFound Component', () => {
  it('test-case-1: should render the component without errors', () => {
    const { container } = render(<NotFound />);

    expect(container).toBeDefined();
  });
});

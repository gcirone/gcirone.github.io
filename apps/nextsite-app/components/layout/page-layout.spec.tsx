import { render } from '@testing-library/react';

import PageLayout from './page-layout';

describe('PageLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayout children={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});

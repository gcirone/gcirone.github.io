import { render } from '@testing-library/react';

import MainLayout from './main-layout';

describe('MainLayout', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line react/no-children-prop
    const { baseElement } = render(<MainLayout children={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});

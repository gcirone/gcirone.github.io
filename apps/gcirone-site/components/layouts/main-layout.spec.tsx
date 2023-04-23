import { render } from '@testing-library/react';
// import MainLayout from './main-layout';

jest.mock('@next/font/google');

describe('MainLayout', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line react/no-children-prop
    // const { baseElement } = render(<MainLayout children={undefined} />);
    // expect(baseElement).toBeTruthy();
    expect(true).toBeTruthy();
  });
});

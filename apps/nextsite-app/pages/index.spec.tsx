import { render } from '@testing-library/react';
import * as models from '@gcirone/data-models';
import Index, { getStaticProps } from './index';
import React from 'react';

jest.mock('@gcirone/data-models');

describe('Index', () => {
  it('should render successfully', async () => {
    jest.spyOn(models, 'findManyWorks').mockResolvedValue([
      { id: 151, createdAt: 'Mon, December 19, 2022', name: 'UnitTest' }
    ]);

    const { props } = await getStaticProps();
    expect(models.findManyWorks).toHaveBeenCalled();

    const { baseElement } = render(<Index works={props.works} />);
    expect(baseElement).toBeTruthy();
  });
});

import { findManyWorks } from './works-repository';

describe('WorksRepository', () => {
  it('findManyWorks', async () => {
    expect(await findManyWorks()).toEqual([]);
  });
});

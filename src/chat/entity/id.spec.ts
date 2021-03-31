import { Id } from './id';

describe('Id', () => {
  it('should be defined', () => {
    const value = "000-1";
    const id = new Id(value);
    expect(id).toBeDefined();
    expect(id.getValue()).toBe(value);
  });
});

import { Member } from './member';

describe('Member', () => {
  it('should be defined', () => {
    const id = "0000-000-1"
    const member = new Member(id);

    expect(member).toBeDefined();
    expect(member.getId()).toBe(id);
  });
});

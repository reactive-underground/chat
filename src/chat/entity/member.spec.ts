import { Member } from './member';
import { Id } from "./id";

describe('Member', () => {
  it('should be defined', () => {
    const id = new Id("0000-000-1");
    const member = new Member(id);

    expect(member).toBeDefined();
    expect(member.getId()).toEqual(id);
  });
});

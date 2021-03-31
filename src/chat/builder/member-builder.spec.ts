import { MemberBuilder } from './member-builder';
import { Member } from "../entity/member";

describe('MemberBuilder', () => {
  it('should be build member', () => {
    const builder = new MemberBuilder();
    const member = builder.build();

    expect(member).toBeInstanceOf(Member);
    expect(member.getId()).toBe("test-1234");
  });
});

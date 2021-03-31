import { Member } from './member';
import { Id } from "./id";

describe('Member', () => {
  it('should be defined', () => {
    const id = new Id("0000-000-1");
    const member = new Member(id);

    expect(member).toBeDefined();
    expect(member.getId()).toEqual(id);
  });

  describe("isEqualTo", () => {
    it("should be equal", () => {
      const id = new Id("0000-000-1");
      const member = new Member(id);
      const member2 = new Member(id);

      expect(member.isEqualTo(member2)).toBeTruthy();
    });

    it("should be not equal", () => {
      const id = new Id("0000-000-1");
      const member = new Member(id);
      const member2 = new Member(new Id("0000-000-2"));

      expect(member.isEqualTo(member2)).toBeFalsy();
    });
  });
});

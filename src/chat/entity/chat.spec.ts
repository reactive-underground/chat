import { Chat } from './chat';
import { Member } from "./member";

describe('Chat', () => {
  it('should be defined', () => {
    const members = [
        new Member("1"),
        new Member("2"),
        new Member("3")
    ];
    const chat = new Chat(members);

    expect(chat).toBeDefined();
    expect(chat.getMembers()).toEqual(members);
  });
});

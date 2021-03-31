import { Chat } from './chat';

describe('Chat', () => {
  it('should be defined', () => {
    const members = [1,2,3];
    const chat = new Chat(members);

    expect(chat).toBeDefined();
    expect(chat.getMembers()).toEqual(members);
  });
});

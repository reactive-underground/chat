import { ChatBuilder } from './chat-builder';
import { Chat } from "../entity/chat";

describe('ChatBuilder', () => {
  it('should be defined', () => {

    const builder = new ChatBuilder()

    const chat = builder.build();

    expect(chat).toBeInstanceOf(Chat);
    expect(chat.getMembers()).toHaveLength(0);
    expect(chat.getId().getValue()).toBe('000-1');
  });
});

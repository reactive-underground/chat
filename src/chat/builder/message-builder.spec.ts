import { MessageBuilder } from './message-builder';
import { Message } from "../entity/message";

describe('MessageBuilder', () => {
  it('should be defined', () => {

    const builder = new MessageBuilder();

    const message = builder.build();

    expect(message).toBeDefined();
    expect(message).toBeInstanceOf(Message);
  });
});

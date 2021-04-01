import { Message } from './message';
import { Id } from "./id";
import { Member } from "./member";

describe('Message', () => {
  it('should be defined', () => {
    const [id, text, member, date] = [
        new Id("1234"),
        "Hello",
        new Member(new Id("222")),
        new Date("2000-05-06")
    ]
    const message = new Message(id, text, member, date);

    expect(message).toBeDefined();
    expect(message.getId()).toEqual(id);
    expect(message.getText()).toEqual(text);
    expect(message.getMember()).toEqual(member);
    expect(message.getDate()).toEqual(date);
  });
});

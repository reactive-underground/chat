import { Message } from "../entity/message";
import { Id } from "../entity/id";
import { Member } from "../entity/member";

export class MessageBuilder {
    public build(): Message {
        return new Message(
            new Id("123"),
            "Default message",
            new Member(
                new Id("222")
            ),
            new Date("2000-01-01")
        );
    }
}

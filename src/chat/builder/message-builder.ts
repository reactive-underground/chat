import { Message } from "../entity/message";
import { Id } from "../entity/id";
import { Member } from "../entity/member";

export class MessageBuilder {

    private sender: Member;

    constructor() {
        this.sender = new Member(
            new Id("222")
        )
    }

    public withSender(sender: Member): MessageBuilder {
        this.sender = sender;
        return this;
    }

    public build(): Message {
        return new Message(
            new Id("123"),
            "Default message",
            this.sender,
            new Date("2000-01-01")
        );
    }
}

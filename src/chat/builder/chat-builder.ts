import { Chat } from "../entity/chat";
import { Id } from "../entity/id";

export class ChatBuilder {
    public build(): Chat {
        return new Chat(
            new Id("000-1"),
            []
        );
    }
}

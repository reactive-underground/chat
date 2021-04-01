import { Chat } from "../entity/chat";
import { Id } from "../entity/id";
import { Member } from "../entity/member";

export class ChatBuilder {

    private members: Member[] = [];

    public withMembers(members: Member[]): ChatBuilder {
        this.members = members;
        return this;
    }

    public build(): Chat {
        return new Chat(
            new Id("000-1"),
            this.members
        );
    }
}

import { Member } from "./member";
import { Id } from "./id";
import { DomainException } from "node-exceptions";
import { Message } from "./message";

export class Chat {

    private readonly id: Id;
    private members: Member[];
    private readonly messages: Message[];

    constructor(id: Id, members: Member[], messages: Message[] = []) {
        this.id = id;
        this.members = members;
        this.messages = messages;
    }

    public getId(): Id {
        return this.id;
    }

    public getMembers(): Member[] {
        return [...this.members];
    }

    public getMessages(): Message[] {
        return [...this.messages];
    }

    public hasMember(member: Member): boolean {
        return this.getMembers().some(item => item.isEqualTo(member));
    }

    public addMember(member: Member): void {
        if(this.hasMember(member)) {
            throw new DomainException("Member already in this chat");
        }
        this.members.push(member);
    }

    public addMessage(message: Message): void {
        if(!this.hasMember(message.getSender())) {
            throw new DomainException("Message sender is not member of the chat");
        }
        this.messages.push(message);
    }

    public removeMember(member: Member): void {
        this.members = this.members.filter(item => !item.isEqualTo(member));
    }
}

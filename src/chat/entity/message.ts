import { Id } from "./id";
import { Member } from "./member";

export class Message {

    private readonly id: Id;
    private readonly text: string;
    private readonly sender: Member;
    private readonly date: Date;

    constructor(id: Id, text: string, sender: Member, date: Date) {
        this.id = id;
        this.text = text;
        this.sender = sender;
        this.date = date;
    }

    public getId(): Id {
        return this.id;
    }

    public getText(): string {
        return this.text;
    }

    public getSender(): Member {
        return this.sender;
    }

    public getDate(): Date {
        return this.date;
    }
}

import { Member } from "./member";
import { Id } from "./id";

export class Chat {

    private readonly id: Id;
    private readonly members: Member[];

    constructor(id: Id, members: Member[]) {
        this.id = id;
        this.members = members;
    }

    public getId(): Id {
        return this.id;
    }

    public getMembers(): Member[] {
        return this.members;
    }

    public addMember(member: Member): void {
        const exists = this.members.some(item => item.getId().getValue() === member.getId().getValue());
        if(exists) {
            throw new Error("Member already in this chat");
        }
        this.members.push(member);
    }
}

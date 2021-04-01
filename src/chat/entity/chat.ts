import { Member } from "./member";
import { Id } from "./id";
import { DomainException } from "node-exceptions";

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

    public hasMember(member: Member): boolean {
        return this.getMembers().some(item => item.isEqualTo(member));
    }

    public addMember(member: Member): void {
        if(this.hasMember(member)) {
            throw new DomainException("Member already in this chat");
        }
        this.members.push(member);
    }
}

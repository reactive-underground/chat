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
        this.members.push(member);
    }
}

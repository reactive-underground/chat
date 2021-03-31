import { Member } from "./member";

export class Chat {

    private readonly members: Member[];

    constructor(members: Member[]) {
        this.members = members;
    }

    public getMembers(): Member[] {
        return this.members;
    }
}

import { Member } from "./member";

export class Chat {

    private readonly id: string;
    private readonly members: Member[];

    constructor(id: string, members: Member[]) {
        this.id = id;
        this.members = members;
    }

    public getId(): string {
        return this.id;
    }

    public getMembers(): Member[] {
        return this.members;
    }
}

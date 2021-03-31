export class Chat {

    private readonly members: number[];

    constructor(members: number[]) {
        this.members = members;
    }

    public getMembers(): number[] {
        return this.members;
    }
}

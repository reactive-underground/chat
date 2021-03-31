import { Id } from "./id";

export class Member {
    private readonly id: Id;

    constructor(id: Id) {
        this.id = id;
    }

    public getId(): Id {
        return this.id;
    }

    public isEqualTo(member: Member): boolean {
        return this.getId().getValue() === member.getId().getValue();
    }
}

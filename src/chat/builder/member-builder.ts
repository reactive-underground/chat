import { Member } from "../entity/member";
import { Id } from "../entity/id";

export class MemberBuilder {
    public build(): Member {
        return new Member(
            new Id("test-1234")
        );
    }
}

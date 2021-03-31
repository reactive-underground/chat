import { Chat } from './chat';
import { Member } from "./member";
import { Id } from "./id";
import { MemberBuilder } from "../builder/member-builder";

describe('Chat', () => {
    it('should be defined', () => {
        const builder = new MemberBuilder();

        const members: Member[] = [
            builder.build(),
            builder.build(),
            builder.build(),
        ];
        const id = new Id("000-2")
        const chat = new Chat(id, members);

        expect(chat).toBeDefined();
        expect(chat.getId()).toEqual(id);
        expect(chat.getMembers()).toEqual(members);
    });

    describe("add member", () => {
        it("should be add member", () => {
            const chat = new Chat(new Id("123"), []);
            const memberToAdd = new MemberBuilder().build()

            chat.addMember(memberToAdd);
            expect(chat.getMembers()).toHaveLength(1);
            expect(chat.getMembers()[0]).toEqual(memberToAdd);
        });
    });
});

import { Chat } from './chat';
import { Member } from "./member";
import { Id } from "./id";
import { MemberBuilder } from "../builder/member-builder";
import { DomainException } from "node-exceptions";

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

        it("should be duplicate error", () => {
            const chat = new Chat(new Id("123"), []);
            const memberToAdd = new MemberBuilder().build()
            const memberToAdd2 = new MemberBuilder().build()

            chat.addMember(memberToAdd);
            try {
                chat.addMember(memberToAdd2);
                fail("member duplicated");
            } catch (e) {
                expect(e).toBeInstanceOf(DomainException);
                expect(e.message).toBe("Member already in this chat");
            }
        });
    });

    describe("hasMember", () => {
        it("should be check exists", () => {
            const chat = new Chat(new Id("123"), []);
            const memberToAdd = new MemberBuilder().build();

            expect(chat.hasMember(memberToAdd)).toBeFalsy();
            chat.addMember(memberToAdd);
            expect(chat.hasMember(memberToAdd)).toBeTruthy();
        });
    });

    describe("removeMember", () => {
        it("should be remove member", () => {
            const member = new MemberBuilder().build();
            const chat = new Chat(new Id("123"), [member]);

            chat.removeMember(member);
            expect(chat.getMembers()).toHaveLength(0);
            expect(chat.getMembers()).not.toContainEqual(member);
        });
    });

    describe("immutable getMembers", () => {
        it("should be not remove member from chat", () => {
            const member = new MemberBuilder().build();
            const chat = new Chat(new Id("123"), [member]);

            chat.getMembers().splice(0, 1);
            expect(chat.getMembers()).toHaveLength(1);
            expect(chat.getMembers()).toContainEqual(member);
        });
    })
});

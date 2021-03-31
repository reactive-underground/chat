import { Chat } from './chat';
import { Member } from "./member";
import { Id } from "./id";

describe('Chat', () => {
    it('should be defined', () => {
        const members = [
            new Member("1"),
            new Member("2"),
            new Member("3")
        ];
        const id = new Id("000-2")
        const chat = new Chat(id, members);

        expect(chat).toBeDefined();
        expect(chat.getId()).toEqual(id);
        expect(chat.getMembers()).toEqual(members);
    });
});

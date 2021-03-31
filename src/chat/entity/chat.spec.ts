import { Chat } from './chat';
import { Member } from "./member";

describe('Chat', () => {
    it('should be defined', () => {
        const members = [
            new Member("1"),
            new Member("2"),
            new Member("3")
        ];
        const id = "000-2"
        const chat = new Chat(id, members);

        expect(chat).toBeDefined();
        expect(chat.getId()).toBe(id);
        expect(chat.getMembers()).toEqual(members);
    });
});

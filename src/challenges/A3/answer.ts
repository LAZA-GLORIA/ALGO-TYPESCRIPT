/**
* In this challenge, you should sort messages by their sentAt property (oldest first) and 
* modify them by adding an "unread" property
* (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
* input. 
*
* @param lastActivityDatetime String representing an ISO8601 datetime. Represent the last time the user checked his messages
* @param messages List of messages, unsorted and without unread property
* @returns Sorted list of messages with the unread information
*/

// ↓ uncomment bellow lines and add your response!

// export default function ({ lastActivityDatetime, messages } : { lastActivityDatetime: string, messages: Message[] }): MessageWithUnread[] {
//     return messages.map((message) => {
//         const arrMessage: string[] = [];
//         const myread: Boolean = true;
//             for (const auth of message.author)  {
//                 arrMessage.push(message.message)
//             }
//        return { ...message, unread: true}
//     })
// }

// export default function ({ lastActivityDatetime, messages } : { lastActivityDatetime: string, messages: Message[] }): MessageWithUnread[] {
//     let newMessages: Message[]= messages.sort(function compare(a, b) {
//         let dateA: number = new Date(a.sentAt).getTime();
//         let dateB: number = new Date(b.sentAt).getTime();
//         return dateA - dateB;

//     });
//     newMessages.forEach(element => {
//         element.unread = element.sentAt>lastActivityDatetime
//     })

//     return newMessages
// }

// export default function ({ lastActivityDatetime, messages } : { lastActivityDatetime: string, messages: Message[] }): MessageWithUnread[] {
//     const newList = messages.map(m => {
//         const newMessage: MessageWithUnread = {...m, unread: new Date(m.sentAt) > new Date(lastActivityDatetime)};
//         return newMessage;
//     }).sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime());

//     return newList;
// }


// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface MessageWithUnread extends Message {
    unread: boolean;
}
/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property.
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ... 
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 * 
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */

// ↓ uncomment bellow lines and add your response!

// export default function ({ messages }: { messages: Message[] }): DayMessages[] {
//     const messagesByDay = messages.reduce((acc, curr) => {
//       const dayOfMessage = new Date(
//         new Date(curr.sentAt).setUTCHours(0, 0, 0, 0)
//       ).toISOString();
//       return { ...acc, [dayOfMessage]: [...(acc[dayOfMessage] || []), curr] };
//     }, {});
  
//     return Object.keys(messagesByDay)
//       .sort()
//       .map((day) => {
//         return {
//           day,
//           messages: messagesByDay[day].sort((a, b) =>
//             a.sentAt > b.sentAt ? 1 : -1
//           ),
//         };
//       });
//   }

// export default function ({ messages }: { messages: Message[] }): DayMessages[] {
//     let result: DayMessages[] = []
  
//     for (let i = 0; i < messages.length; i++) {
//       const datePrefix: string = messages[i].sentAt.substring(0, 10)
//       let dateAlreadyTreated: boolean = false
  
//       for (let k = 0; k < result.length; k++) {
//         if (result[k].day.includes(datePrefix)) dateAlreadyTreated = true
//       }
  
//       if (!dateAlreadyTreated) {
//         const globalDate: string = datePrefix + 'T00:00:00.000Z'
//         const messagesGroupedByDay: DayMessages = {
//           day: globalDate,
//           messages: [],
//         }
//         const todaysMessages: Message[] = []
  
//         for (let j = 0; j < messages.length; j++) {
//           if (messages[j].sentAt.includes(datePrefix))
//             todaysMessages.push(messages[j])
//         }
  
//         todaysMessages.sort((a: Message, b: Message) =>
//           a.sentAt.localeCompare(b.sentAt),
//         )
//         messagesGroupedByDay.messages = todaysMessages
//         result.push(messagesGroupedByDay)
//       }
  
//       result.sort((a: DayMessages, b: DayMessages) => a.day.localeCompare(b.day))
//     }
  
//     return result
//   }

// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface DayMessages {
    day: string;
    messages: Message[];
}
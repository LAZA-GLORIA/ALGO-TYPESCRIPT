/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

/**
 * export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    return events.sort((a, b) => {    
        if (a.startDatetime === b.startDatetime) {
            return a.endDatetime.localeCompare(b.endDatetime)   
        } else {
            return a.startDatetime.localeCompare(b.startDatetime)
     }})
}
 */


/**
 * export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    events.sort( (a, b) => {
        if(a.startDatetime === b.startDatetime) {
            return  a.endDatetime.localeCompare(b.endDatetime)
        } 
            return a.startDatetime.localeCompare(b.startDatetime)
    })

    return events.sort((a, b) => a.startDatetime - b.startDatetime
}
 */


// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}
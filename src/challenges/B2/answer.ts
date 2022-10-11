/**
 * In this challenge, you have to get all the categories from the events. The categories 
 * must be unique and sorted from A to Z.
 * 
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

import { getEnabledCategories } from "trace_events";

// ↓ uncomment bellow lines and add your re
export default function ({ events }: { events: EventWithCategory[] }): string[] {
    const arrayCategories: string[]= [];
     events.forEach((e) => {
            for (const categories of e.categories) {
                if (!arrayCategories.includes(categories)) {
                arrayCategories.push(categories);
            }     
        }
    })
    return arrayCategories.sort()
}


// used interfaces, do not touch
export interface EventWithCategory {
    startDatetime: string;
    endDatetime: string;
    event: string;
    categories: string[];
}

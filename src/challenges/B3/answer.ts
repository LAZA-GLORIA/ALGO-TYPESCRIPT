/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common. 
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 * 
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!

// export default function ({ groups }: { groups: GroupWithSills[] }): GroupWithSillsAndClosestGroups[] {
//     let result: GroupWithSillsAndClosestGroups[]= [];
//     for (let i = 0; i< groups.length; i++) {
//         let groupAndClosest: GroupWithSillsAndClosestGroups = {...groups[i], closestGroups: []};
    
//     let closest: GroupWithSills[] = [];
//     let maxCount: number = 0;
//     for (let j = 0; j< groups.length; j++) {
//         if(i != j) {
//             // s'incrémente à chaque fois que je trouve une ressembla,ce à mon gpe de reference
//             let sameSkillCount: number = 0;
//             // ici je m'addresse aux skills du groupe que je regarde
//             // et je garni mon compteur
//             for (let k = 0; k < groups[j].skills.length; k++) {
//                 if (groups[i].skills.includes(groups[j].skills[k])) {
//                     sameSkillCount++;
//                 }
//             }
//             if (sameSkillCount === maxCount) {
//                 closest.push(groups[j]);
//             }
//             if (sameSkillCount > maxCount) {
//                 maxCount = sameSkillCount;
//                 closest = [];
//                 closest.push(groups[j]);
//             }
//         }
//     }
//     groupAndClosest.closestGroups = closest;
//     result.push(groupAndClosest);
// }
//     return result;
// }


// used interfaces, do not touch
export interface GroupWithSills {
    name: string;
    skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
    closestGroups: GroupWithSills[];
}

//import { getNotesFronDB } from "./dbController";
import { getNotesFronDB } from "./dbMockController";

export const getNotes = async() => {
    const notes = await getNotesFronDB();
    return notes;
}
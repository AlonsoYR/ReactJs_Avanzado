//Fichero donde almacena toda la lógica de DB(CRUD)
import { db } from "./index";
import { collection, addDoc, getDocs } from "firebase/firestore"; 


export const addNewTask = async task => {
    await addDoc(collection(db, 'tasks'), task);
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    //console.log(querySnapshot);
    // querySnapshot.forEach(doc => {
    //     console.log(doc.id, ' => ', doc.data())
    // })

    const tasks = querySnapshot.docs.map(doc => {
        return{ ...doc.data(), id: doc.id }
    })
    //console.log(tasks);
    return tasks;
}
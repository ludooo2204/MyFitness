import { openDatabase } from 'react-native-sqlite-storage';
export const deleteSpecificElementTableGainage = (element) => {
    console.log("delete element")
    console.log(element)
    var db = openDatabase({ name: 'FitnessDatabase.db' });
    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM session_gainage WHERE id= ' + element.id
        );
    });
}
export const deleteSpecificElementTableSquat = (element) => {
    console.log("delete element")
    console.log(element)
    var db = openDatabase({ name: 'FitnessDatabase.db' });
    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM session_squat WHERE id= ' + element.id
        );
    });
}
export const deleteSpecificElementTablePump = (element) => {
    console.log("delete element")
    console.log(element)
    var db = openDatabase({ name: 'FitnessDatabase.db' });
    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM session_pump WHERE id= ' + element.id
        );
    });
}
export const deleteSpecificElementTablePoids = (element) => {
    console.log("delete element")
    console.log(element)
    var db = openDatabase({ name: 'FitnessDatabase.db' });
    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM session_poids WHERE id= ' + element.id
        );
    });
}


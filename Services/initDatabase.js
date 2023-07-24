import { openDatabase } from 'react-native-sqlite-storage';
export default initDatabase = () => {
    var db = openDatabase({ name: 'FitnessDatabase.db' });

    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS session_gainage (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, duration INTEGER, user TEXT);'
        ), [],
            (tx, results) => {
                console.log('Table session_gainage created successfully');
            },
            (tx, error) => {
                console.log(`Error creating table session_gainage: ${error}`);
            }
    });
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS session_squat (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, count INTEGER, user TEXT);'
        ), [],
            (tx, results) => {
                console.log('Table session_squat created successfully');
            },
            (tx, error) => {
                console.log(`Error creating table session_squat: ${error}`);
            }
    });
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS session_pump (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, count INTEGER, user TEXT);'
        ), [],
            (tx, results) => {
                console.log('Table session_pump created successfully');
            },
            (tx, error) => {
                console.log(`Error creating table session_pump: ${error}`);
            }
    });
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS session_poids (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, count INTEGER, user TEXT);'
        ), [],
            (tx, results) => {
                console.log('Table session_pump created successfully');
            },
            (tx, error) => {
                console.log(`Error creating table session_pump: ${error}`);
            }
    });

    // Close the database
    // db.close((success) => console.log('Success closing database'), (error) => console.log('Error closing database: ', error));
}

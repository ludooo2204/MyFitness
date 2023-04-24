import { openDatabase } from 'react-native-sqlite-storage';
export const ReadGainageFromDatabase = (callback) => {
    var db = openDatabase({ name: 'FitnessDatabase.db' });



    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT * FROM session_gainage",
            [],
            function (tx, results) {
                // console.log('Success reading rows from session_gainage');
                let data = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    // console.log(results.rows.item(i));
                    data.push(results.rows.item(i))
                }
                callback(data)
            }

        )
    })


};
export const ReadSquatFromDatabase = (callback) => {
    var db = openDatabase({ name: 'FitnessDatabase.db' });



    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT * FROM session_squat",
            [],
            function (tx, results) {
                // console.log('Success reading rows from session_gainage');
                let data = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    // console.log(results.rows.item(i));
                    data.push(results.rows.item(i))
                }
                callback(data)
            }

        )
    })


};


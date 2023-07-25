import { ReadSquatFromDatabase } from "./ReadFromDatabase";

const checkCounts = (data) => {
    const today = new Date();
    let hourlyCount = 0;
    let dailyCount = 0;
    let weeklyCount = 0;
    const oneHourAgo = new Date(today.getTime() - 60 * 60 * 1000); // 1 heure en millisecondes
    const oneDayAgo = new Date(today.getTime() - 24 * 60 * 60 * 1000); // 1 jour en millisecondes
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // 1 semaine en millisecondes

    for (const entry of data) {
        const entryDate = new Date(entry.date);
        if (entryDate >= oneHourAgo) {
            hourlyCount += entry.count;
        }
        if (entryDate >= oneDayAgo) {
            dailyCount += entry.count;
        }
        if (entryDate >= oneWeekAgo) {
            weeklyCount += entry.count;
        }
    }

    console.log('hourlyCount');
    console.log(hourlyCount)
    console.log('dailyCount');
    console.log(dailyCount)
    console.log('weeklyCount');
    console.log(weeklyCount)

    if (dailyCount > 100) {
        alert("Alerte : Le compte quotidien a dépassé 100 !");
    }

    if (weeklyCount > 500) {
        alert("Alerte : Le compte hebdomadaire a dépassé 500 !");
    }
}

const selectSuccess = (item) => {
    console.log('item');
    console.log(item)
    ReadSquatFromDatabase(data => {
        console.log(data)
    })
}


export { checkCounts, selectSuccess }
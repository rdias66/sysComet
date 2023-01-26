const arrayFilter = (today, arrayDb) => {
    let localToday = today;
    let todayValue = localToday.getTime();
    let localArrayDb = arrayDb;
    let todayEventsArray = localArrayDb.filter(checkFilterForToday);
    let upcomingEventsArray = localArrayDb.filter(checkFilterForUpcoming);
}

const checkFilterForUpcoming = (cometEvent) => {
    let localComet = cometEvent;
    let eventStart = setDateFormat(localComet.inicio).getTime();
    let eventEnd = setDateFormat(localComet.fim).getTime();
    let twoMonthValue = twoMonthTimeValue(); 
    let timeValueLimit = this.todayValue + twoMonthValue;
    if(eventEnd < timeValueLimit && eventStart > todayValue ){return localComet;}    
}

const checkFilterForToday = (cometEvent) => {
    let localComet = cometEvent;
    let eventStart = setDateFormat(localComet.inicio).getTime();    
    if(eventStart <= todayValue && eventEnd >= todayValue){return localComet}
}

const twoMonthTimeValue = () => { //project rule of business / static function, fixed value
    let initialDate = new Date("2023-01-25");//day of choice not important, the dates just have to be exacly 2 months apart
    let finalDate = new Date("2023-03-25");
    let initialValue = initialDate.getTime();
    let finalValue  = finalDate.getTime();
    let twoMonthValue = finalValue - initialValue;
    return twoMonthValue;
}

const setDateFormat = (stringDate) => { // format that will always arrive is month(two digits)/day
    let today = new Date();
    let year = today.getFullYear();
    let month = stringDate.substring(0,2); 
    let day = stringDate.substring(3,5);
    let dateString = year + '-' + month + '-' + day;
    let dateFormatSet = new Date(dateString);
    return dateFormatSet;
}

const arrayPrinter = (arrayToday, arrayUpcoming) => {
    let localArrayToday = arrayToday;
    let localArrayUpcoming = arrayUpcoming;
    if(localArrayToday.legth != 0){ // if not empty
    for(let event of localArrayToday){ //prints todays events
        let name = event.nome;
        let intensity = "-" + event.intensidade + " ";
        let hemisphere =  "-" + event.thz + " ";
        let period = "-" + event.inicio + "ate" + event.fim;
        }
    }else {console.log("Nao existem chuvas para serem visualizadas hoje. seguem as chuvas dos proximos 2 meses.\n");}
    for(let index of localArrayUpcoming){ //prints next two month's upcoming events
        let name = index.nome;
        let intensity = "-" + index.intensidade + " ";
        let hemisphere =  "-" + index.thz + " ";
        let period = "-" + index.inicio + "ate" + index.fim; 
        console.log(name.padEnd(20," ")+ intensidade + hemisphere + period);
    } 
}



export {arrayFilter, arrayPrinter};

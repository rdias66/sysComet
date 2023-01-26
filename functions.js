const arrayFiltered = (today, arrayDb) => {
    let localToday = today;
    let todayValue = localToday.getTime();
    let localArrayDb = arrayDb;
    let filteredArray = localArrayDb.filter(checkFilter);
}

const checkFilter = (cometEvent) => {
    let localComet = cometEvent;
    let eventStart = setDateFormat(localComet.inicio).getTime();
    let eventEnd = setDateFormat(localComet.fim).getTime();
    let twoMonthValue = twoMonthTimeValue();
    let timeValueLimit = this.localToday.getTime() + twoMonthValue;
    if(eventEnd < timeValueLimit && eventStart > this.todayValue){return localComet;}
    
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

const arrayPrinter = (arrayToBePrinted) => {
    let arrayComets = arrayToBePrinted;
    for(let index of arrayComets){
        let name = index.nome;
        let intensity = "-" + index.intensidade + " ";
        let hemisphere =  "-" + index.thz + " ";
        let period = "-" + index.inicio + "ate" + index.fim; 
        console.log(name.padEnd(20," ")+ intensidade + hemisphere + period);
    } 
}


const getEvent = (date) => {};
export default getEvent;

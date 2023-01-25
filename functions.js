const arrayFiltered = (today, arrayDb) => {
    let localToday = today;
    let timeValue = localToday.getTimestamp();
    let localArrayDb = arrayDb;
    let filteredArray = localArrayDb.filter()
}

const checkFilter = (cometEvent) => {
    let eventStart = setDateFormat(cometEvent.inicio);
    let eventEnd = setDateFormat(cometEvent.fim);
    let twoMonthValue = twoMonthTimeValue();
    let timeValueLimit = this.localToday.getTimestamp() + twoMonthValue;
    
}

const twoMonthTimeValue = () => { //project rule of business
    let initialDate = new Date("2023-01-25");//day of choice not important, the dates just have to be exacly 2 months apart
    let finalDate = new Date("2023-03-25");
    let initialValue = initialDate.getTimestamp();
    let finalValue  = finalDate.getTimestamp();
    let twoMonthValue = finalValue - initialValue;
    return twoMonthValue;
}

const checkTimeValue = () => {

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
const getEvent = (date) => {};
export default getEvent;

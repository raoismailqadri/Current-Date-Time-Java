let currDate =  new Date();
document.write(currDate,'<br>');

var theDay = currDate.getHours();
document.write(theDay)

// EID ADHA,DAYS LEFT BEHIND********************

var today = new Date();
var eidDay = new Date("June 17, 2024");
var forToday = today.getTime();
var forEidDay = eidDay.getTime();
var msDiff = forEidDay - forToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
document.write(dDiff)
const day=document.getElementById('days');
const hour=document.getElementById('hours');
const min=document.getElementById('mins');
const sec=document.getElementById('seconds');

const newYear="27 Nov 2023";
function gtdate(){   
    const new_date = new Date(newYear);
    const currdate=new Date();
    const Totalseconds =(new_date-currdate);
    //MUltiplied with 1000 to convert the value into milliseconds as totalseconds is in millisec (in every case)
    const days = Math.floor(Totalseconds/(60*60*24*1000)); 
    // 60 sec 60 min 24 hours
    const hours= Math.floor((Totalseconds%(60*60*24*1000))/(1000*60*60)); //taking the remainder of days and dividing it with 60 sec*60min 
    const minutes = Math.floor((Totalseconds%(60*60*1000))/(1000*60));    //taking the remainder of hours and dividing it with 60 sec
    const second = Math.floor((Totalseconds%(60*1000))/1000);           // taking the remnainder of mins and dividing it with 1000 ms
    console.log(days, hours,minutes,second);
    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(minutes);
    sec.innerHTML = formatTime(second);
}
function formatTime(time){
    return time<10 ?(`0${time}`) :time;
}

gtdate();

setInterval(gtdate ,1000);

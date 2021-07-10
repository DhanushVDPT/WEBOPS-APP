let [milliseconds,seconds,minutes,hours] = [0,0,0,0]; //defining and assigning time units to 0 before start
let timerRef = document.querySelector('.timerDisplay'); //will be used to display the ticking clock
let int = null; //will be used as the interval to hold the timer values
//when start button is clicked, the interval should start from 0
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10); //timer is started. displayTimer function is called every centisecond (10 milliseconds)
});

document.getElementById('stopTimer').addEventListener('click', ()=>{
    clearInterval(int); //clears the timer set by clicking start button
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    //reset will clear the timer and also reset all time units to 0 in the clock
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10; //account for calling every 10 milliseconds
    if(milliseconds == 1000){
        //1000 milliseconds = 1 second, so if 1000 milliseconds are clocked, milliseconds should go back to 0 and seconds should increase by 1
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            //60 secs = 1min, when 60 secs are clocked, secs should go back to 0 and minutes should increase by 1
            seconds = 0;
            minutes++;
            if(minutes == 60){
                //60 mins = 1hr, when 60 mins are clocked, mins should go back to 0 and hr should increse by 1
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours; //if single digit, 0 is concactanated, else shown as it is
    let m = minutes < 10 ? "0" + minutes : minutes; //if single digit, 0 is concactanated, else shown as it is
    let s = seconds < 10 ? "0" + seconds : seconds; //if single digit, 0 is concactanated, else shown as it is
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    //if single digit two zeroes are concactanated, if double digit 1 zero is concactanated to get three digits

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`; //update the clock displayed to user
}

'use strict'

let deadline = '2019-07-22';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor( (t / 1000) % 60 ),
    minutes = Math.floor( (t / 1000 / 60) % 60 ),
    hours = Math.floor( (t / 1000 / 60 / 60) % 24 ),
    days = Math.floor( (t / 1000 / 60 / 60 / 24) );
    if (minutes < 10) {
        minutes = '0' + minutes
    } 
    if (hours < 10) {
        hours = '0' + hours
    } 
    if (seconds < 10) {
        seconds = '0' + seconds
    };
    
    
    
    return {
        total: t,
        days,
        hours,
        minutes,
        seconds
    };
};

function setClock(id, endtime) {

    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        };
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
};

setClock('timer', deadline);

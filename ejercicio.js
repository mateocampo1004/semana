'use strict'

let week = ['Suday','Tuesday','Wednesday','Thursday','Saturday']; 

week.shift();
week.unshift('Monday');
week.push('Sunday');
week.splice(4,0,'Friday');


for(let i=0;i<week.length;i++){


    alert(week[i]);
}
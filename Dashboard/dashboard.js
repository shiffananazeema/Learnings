/* globals Chart:false, feather:false */

let seconds = 0;
let minutes = 0;
let hours = 0;

console.clear()
console.log('test...')
var x = localStorage.getItem("name");
document.getElementById("username").innerHTML ="Hello, "+x;



function stopWatch(){
  
  seconds++;

  if(seconds / 60 === 1){
    seconds = 0;
    minutes++;

    if(minutes / 60 ===1){
      minutes = 0;
      hours++;
    }
  }
  document.getElementById("stime").innerHTML = hours + ":" + minutes + ":" + seconds ;
}

window.setInterval(stopWatch, 1000);

var myVar = setInterval(myTimer,1000);

function myTimer(){
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleString();
}


(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()

function refresh(){

}

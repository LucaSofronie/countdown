const numArr = document.querySelectorAll('.flip-card');
let days = 7;
let hours = 0;
let minutes = 0;
let seconds = 0;

const update = () => {
  numArr[0].innerText = days;
  numArr[1].innerText = hours;
  numArr[2].innerText = minutes;
  numArr[3].innerText = seconds;
  console.log(days, hours, minutes, seconds);
}

const timePassing =()=>{
  if (days || hours || minutes || seconds){
    seconds--;

    if (seconds < 0){
      minutes--;
      if (minutes < 0){
        hours--;

        if (hours < 0){
          days--;
          if (days<0){
            days=hours=minutes=seconds=0;
            return;
          }
          hours+=24;
        }
        minutes+=60;

      }
      seconds+=60;
    }
  
    update();
    // console.log('updated');
    console.log(days, hours, minutes, seconds);
    setTimeout(() => {
      timePassing();
    }, 1000);
}
}

document.addEventListener('DOMContentLoaded', function(){
  timePassing();
})
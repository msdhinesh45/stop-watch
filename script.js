
window.onload = function(){
    let seconds = 0;
    let milliseconds = 0;
    let interval;

    const addSeconds = document.querySelector(".seconds");
    const addMilliSeconds = document.querySelector(".milli");

    const startBtn  = document.querySelector(".start");
    const stopBtn  = document.querySelector(".stop");
    const resetBtn  = document.querySelector(".reset");

    startBtn.onclick = function(){
        clearInterval(interval);
        interval = setInterval(start,10);
    }
    stopBtn.onclick = function(){
        clearInterval(interval);


    }
    resetBtn.onclick = function(){
      clearInterval(interval);
      seconds = 0;
      milliseconds = 0;
      addSeconds.innerHTML = "00";
      addMilliSeconds.innerHTML = "00";
    }

    function start(){
        milliseconds++;

        if(milliseconds<10){
            addMilliSeconds.innerHTML = "0"+milliseconds;

        }
        else{
            addMilliSeconds.innerHTML = milliseconds;

        }

        if(milliseconds>90){
            seconds++;
            addSeconds.innerHTML = seconds<10?"0"+seconds:seconds;
            milliseconds = 0;
            milliseconds.innerHTML = "00";
        }
    }
}
//GETTING OUR WORKSPACE
var clock = document.getElementById("clock");
    color = document.getElementById("color");
//MAKING A FUNCTION
colorClock = () => {
    var time = new Date(), 
        h = (time.getHours() % 12).toString(),//MAKING 12-HOURS CLOCK
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();
        
    if(h.length < 2 ){//FOR NOT APPERING 1:1:1 FOR EXAMPLE
        h = "0" + h;
    }
    if(m.length < 2 ){
        m = "0" + m;
    }
    if(s.length < 2 ){
        s = "0" + s;
    }

    var clockString = h + ":" + m + ":" + s; 
    var colorString = "#" + h + m + s;
    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.background = colorString;
}

colorClock();
setInterval(colorClock,1000)
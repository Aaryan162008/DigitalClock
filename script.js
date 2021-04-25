function clock(){
    var currentdate=new Date();

var hours=currentdate.getHours();
var minutes=currentdate.getMinutes();
var seconds=currentdate.getSeconds();
var zone="PM"

if(seconds < 10) {
    seconds = "0"+seconds;
} 
if(minutes < 10) {
    minutes = "0"+minutes;
} 
if(hours < 10) {
    hours = "0"+hours;
} 
if(hours > 11 ){
    zone="PM"  
}
else{
    zone="AM"
}

if(hours > 12){
    hours=hours-12
}


document.getElementById("Date").innerHTML=hours+":"+minutes+":"+seconds+":"+zone;
}
setInterval(clock,1)
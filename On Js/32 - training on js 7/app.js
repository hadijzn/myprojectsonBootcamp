var minute = +prompt('enter a minute : ')
var second = +prompt('enter a second : ')

var timer = setInterval(function(){
    console.log(minute,':',second);
    second--
    if(second ===0){
        minute--
        second =59
    }
    if(minute===-1){
        clearInterval(timer)
    }

},200)
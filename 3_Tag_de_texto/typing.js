var i = 0;
const text = document.querySelector('.text-typing')
message = "<p> texto </p>"

function typing(){
    if (i < message.length){
        document.querySelector('.text-typing').innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}

typing()

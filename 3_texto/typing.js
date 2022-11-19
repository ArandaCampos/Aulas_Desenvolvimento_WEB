var cont = 0;
const text = document.querySelector('.text-typing')
message = "<p> texto </p>"

const typing = () => {
    if (cont < message.length){
        document.querySelector('.text-typing').innerHTML += message.charAt(cont);
        cont++;
        setTimeout(typing, 150);
    }
}

const reset = () => {
    cont = 0;
    document.querySelector('.text-typing').innerHTML = "";
}

for (var i = 0; i < 50; i++){
    setTimeout(reset, 4050 * i)
    setTimeout(typing, 4050 * i + 200)
}
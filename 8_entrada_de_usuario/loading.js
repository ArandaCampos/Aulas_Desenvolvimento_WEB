const txt_user = "Aluno 1"
const txt_pass = "123456"
var cont_u = 0
var cont_p = 0
const delay = ms => new Promise(res => setTimeout(res, ms));

const loading = async () => {
    setTimeout(showForm, 3000);

    for (var i = 0; i <= 100; i += 4){
        document.getElementById("progress").style.width = i + "%"
        document.getElementById("number").innerHTML = i + "%";
        await delay(100);
    }
  
}

const showForm = async () => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("forms").style.display = "flex";
  document.getElementById('forms').style.animationPlayState = "running" 
  setTimeout(typing_user, 1100);
  setTimeout(typing_password, 2800)
  setTimeout(pressed_btn, 4100)
}

const typing_user = () => {
    if (cont_u < txt_user.length){
        document.getElementById('username').value += txt_user.charAt(cont_u);
        cont_u++;
        setTimeout(typing_user, 150);
    }
}

const typing_password = () => {
    if (cont_p < txt_pass.length){
        document.getElementById('password').value += txt_pass.charAt(cont_p);
        cont_p++;
        setTimeout(typing_password, 150);
    }
}

const pressed_btn = () => {
    document.getElementById('submit').style.animationPlayState = "running"
}
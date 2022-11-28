const element_user = document.getElementById('user')

const set_config = () => {
    const user = localStorage.getItem("user") ?? 'aluno(a)'
    element_user ? element_user.innerHTML += user + '.' : {}
}

set_config()
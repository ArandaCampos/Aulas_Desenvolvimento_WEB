const element_user = document.getElementById('user')
const element_email = document.getElementById('email')
const path = window.location.pathname

const set_config = () => {
    const user = localStorage.getItem("user") ?? 'aluno(a)'
    const email = localStorage.getItem("email") ?? 'aluno@somas.org'
    element_user ? element_user.value = user : {}
    element_email ? element_email.value = email : {}
}

const send = () => {
    localStorage.setItem('user', element_user.value)
    localStorage.setItem('email', element_email.value)
}

set_config()
const context = document.querySelector(".carousel")
const pageOne = document.querySelector(".page-1")
const pageTwo = document.querySelector(".page-2")
const on = '#45C4B0'
const off = 'rgb(245, 245, 245)'
var position = 1

const init = () => {
    pageOne.style.backgroundColor = on
    context.style.animationName = 'twoToOne'
}

const page_1 = () => {
    pageOne.style.backgroundColor = on
    if (position == 2){
        pageTwo.style.backgroundColor = off
        context.style.animationName = 'twoToOne'
        position = 1
    }
}

const page_2 = () => {
    pageTwo.style.backgroundColor = on
    if (position == 1){
        pageOne.style.backgroundColor = off
        context.style.animationName = 'oneToTwo'
        position = 2
    }
}

init()
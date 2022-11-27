const line_visibility = window.screen.height * 0.35;
const elements = document.querySelectorAll('.content');

const moved_page = () => {
    
    const elements_disabled = [].filter.call(elements, (element) => getComputedStyle(element).getPropertyValue("animation-play-state") == "paused")
    // console.log(elements_disabled) 
    
    if (elements_disabled.length) {
        console.log("entrou")
        const pos_elements = [].map.call(elements, (element) => {
            return { 
                element: element,
                pos: element.getBoundingClientRect().y,
                visible: false
            };
        })

        const visibles = pos_elements.map((element) => {
            if (element.pos < line_visibility && element.pos > 0){
                return ({...element,  visible: true}) 
            } else {
                return element
            }
        })

        const active_visible = visibles.find((element) => element.visible)

        active_visible ? active_visible.element.style.animationPlayState = "running" : {}
    }
    
}

document.addEventListener('scroll', moved_page);
const line_visibility = window.screen.height * 0.35;
const elements = document.querySelectorAll('.content');

const scrolled_page = () => {
    
    const elements_disabled = [].filter.call(elements, (element) => getComputedStyle(element).getPropertyValue("animation-play-state") == "paused")
    
    if (elements_disabled.length) {
        const pos_elements = [].map.call(elements_disabled, (element) => {
            return { 
                element: element,
                pos: element.getBoundingClientRect().y,
                visible: false
            };
        })

        const visibility = pos_elements.map((element) => {
            if (element.pos < line_visibility && element.pos > 0){
                return ({...element,  visible: true}) 
            } else {
                return element
            }
        })

        const visibles_elements = visibility.find((element) => element.visible)

        visibles_elements ? visibles_elements.element.style.animationPlayState = "running" : {}
    }
    
}

document.addEventListener('scroll', scrolled_page);
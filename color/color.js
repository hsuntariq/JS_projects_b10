
let heading = document.querySelector('h1')

const colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const generateRandom = () => {
    const random = Math.random() * colors.length
    const floor = Math.floor(random)
    return floor;
}


// #660D33


const generateHex = () => {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        hex = hex + colors[generateRandom()]
    }

    return hex
}



window.addEventListener('mousemove', () => {
    document.body.style.background = generateHex()
    heading.innerHTML = generateHex()
})
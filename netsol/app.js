






let icon = document.querySelector('.lang-btn')
let lang_list = document.querySelector('.list')
let listItems = document.querySelectorAll('li')
let heading = document.querySelector('h6')
let menuLines = document.querySelector('.lines')
let curtain = document.querySelector('.sidebar')
let lines = document.querySelectorAll('.line')
let list = document.querySelectorAll('.listings')
let text = document.querySelector('.inner-html')
let image = document.querySelector('img')


icon.addEventListener('click', () => {

    lang_list.classList.toggle('show')

})


// console.log(listItems)
// only for first index
// listItems[1].addEventListener('click', () => {
//     console.log('hello')
// })


// we want event listerner for every item/element of the array


listItems.forEach((language) => {
    language.addEventListener('click', () => {
        heading.innerHTML = language.innerHTML
    })
})


menuLines.addEventListener('click', () => {
    if (text.innerHTML === 'MENU') {
        text.innerHTML = 'CLOSE'
        text.style.transform = 'rotate(360deg)'
    } else {
        text.innerHTML = 'MENU'
        text.style.transform = 'rotate(0)'
    }
    curtain.classList.toggle('show-sidebar')
    lines[1].classList.toggle('hide-line2')
    lines[0].classList.toggle('line1-cross')
    lines[2].classList.toggle('line3-cross')

    list.forEach((data, index) => {
        data.style.opacity = '0'
        setTimeout(() => {
            data.classList.toggle('animate')
            data.style.opacity = '1'
        }, index * 200);
    })

})



particlesJS("particles-js", { "particles": { "number": { "value": 194, "density": { "enable": true, "value_area": 1025.8919341219544 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 0, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
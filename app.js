let text = document.querySelector(".count")
let btns = document.querySelectorAll('.btn')
let number = 0


text.innerHTML = number


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML === 'Increase') {
            number++;
            text.innerHTML = number
            text.style.color = 'green'
        } else if (btn.innerHTML === 'Reset') {
            number = 0;
            text.innerHTML = number
            text.style.color = 'yellow'
        } else {
            number--;
            text.innerHTML = number
            text.style.color = 'red'

        }
    })
})




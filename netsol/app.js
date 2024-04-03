let icon = document.querySelector('.lang-btn')
let lang_list = document.querySelector('.list')
let listItems = document.querySelectorAll('li')
let heading = document.querySelector('h6')
// let show = false;

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



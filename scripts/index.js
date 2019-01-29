const currentLinks = document.querySelectorAll('a li')

// window.addEventListener('click', currentLinks.forEach( (link) => {
//     console.log(link);
//     // link.classList.add("active")
// }))


currentLinks.forEach((link) =>{
    link.addEventListener('click', () => { 
        currentLinks.forEach( i => i.classList.remove('active') )
        link.classList.add("active");
})
})
const button = document.querySelector('button')
// const button = document.querySelectorAll('button')
// const image = document.querySelector('img')
const image = document.querySelectorAll('img')


// button.addEventListener('click', () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => console.log(json.message))
//     image.src = json.message
// })




// button.addEventListener('click', () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json.message)
//             image.src = json.message
//         })
// })

image.forEach(image => {
    button.addEventListener('click', () => {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(json => {
                    console.log(json.message)
                    image.src = json.message
                })
        })    
})
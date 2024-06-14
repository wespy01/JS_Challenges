const button = document.querySelector('button')
const image = document.querySelectorAll('img')
// const button = document.querySelectorAll('button')
// const image = document.querySelector('img')

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

// image.forEach(image => {
//     button.addEventListener('click', () => {
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(response => response.json())
//             .then(json => {
//                 console.log(json.message)
//                 image.src = json.message
//             })
//     })
// })


// // USING XHR REQUEST NOW 



image.forEach(images => {
    button.addEventListener('click', () => {
        const xhr = new XMLHttpRequest()
        // console.log(xhr);

// addEventListener should be used isntead of onload

        xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.response);
            images.src = response.message;
        })

// Below onload code is also working but addeventlistener is preferred 

        // xhr.onload = () => {
        //     const respo = JSON.parse(xhr.response);
        //     images.src = respo.message;
        // }

        xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
        xhr.send()
    })
})
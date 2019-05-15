console.log('%c HI', 'color: firebrick')

//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl) 
.then(function(response){
    return response.json()
})
.then(function(data){
    let div = document.getElementById('dog-image-container')
    data.message.forEach(function(element){
        let img = document.createElement('img')
        img.src = element
        div.append(img)
    })
})


//Challenge 2 && Challenge 3
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function dogArray(breedUrl){
    fetch(breedUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data)
    {
        let div = document.querySelector('#dog-breeds')
        let ul = document.createElement('ul')
        console.log(data)
        Object.keys(data.message).forEach(function(element)
        {
            let li = document.createElement('li')
            li.innerHTML = element
            ul.append(li)
            div.append(ul)
            //Challenge 3
            li.addEventListener('click', function(event)
            {
                event.preventDefault
                li.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
            })
        })
    })
}

// .then(function(data){
//     let ul = document.getElementById('dog-breeds')
//     let dropDown = document.getElementById('breed-dropdown')
    
//     newArray = []
//     // debugger
//     dropDown.addEventListener('change', function(e){
//         // debugger
//         Object.keys(data.message).forEach(function(breed){
//             if (breed[0] === e.target.value) {
//                 newArray.push(breed)
//                 newArray.forEach(function(breed){
//                     let li = document.createElement('li')
//                     li.innerText = breed
//                     })
//                     ul.append(li)
//                 }
//             }) 
//         })
        

//     // Object.keys(data.message).forEach(function(breed){
//     //     let li = document.createElement('li')
//     //     li.innerText = breed
//     //     li.addEventListener('click', function(event){
//     //         event.preventDefault  
//     //         li.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
//     //     })
//     // ul.append(li)    
//     // })
// })

//Challenge 4




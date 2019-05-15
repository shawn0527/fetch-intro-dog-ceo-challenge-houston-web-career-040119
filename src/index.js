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


fetch(breedUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    let ul = document.getElementById('dog-breeds')
    let filter = ""  
    let dropDown = document.getElementById('breed-dropdown')
    // debugger
    dropDown.addEventListener('change', function(e){
        filter = e.target.value
        ul.innerHTML = ""
        renderDogs(filter,data,ul)
    })

    renderDogs(filter,data,ul)
})


    function renderDogs(filter, data, ul){
        Object.keys(data.message).filter(word => word.startsWith(`${filter}`)).forEach(function(breed){
            let li = document.createElement('li')
            li.innerText = breed
                // debugger
            ul.append(li)
        })
    }

//     Object.keys(data.message).forEach(function(breed){
//         let li = document.createElement('li')
//         li.innerText = breed
//         li.addEventListener('click', function(event){
//             event.preventDefault  
//             li.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
//         })
//     ul.append(li)    
//     })
// })

//Challenge 4




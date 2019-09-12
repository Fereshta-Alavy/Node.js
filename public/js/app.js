console.log('client side javascrip file is loaded')



const weatherForm= document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    messageOne.textContent = 'loading...'

    fetch('http://localhost:3000/getgreeting?name=' + search.value).then((Response)=>{
    Response.text().then((data) =>{
        messageOne.textContent = data

    })

    })


})
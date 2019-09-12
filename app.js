const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//define paths for express config
const publicDir = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templetes/views')
const partialPath = path.join(__dirname, '/templetes/partial')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDir))

app.get('', (req,res) => {
    res.render('index' , {
        title : 'Hello world',
        name : 'Fereshta Alavy'
    })

})

app.get('/getgreeting', (req,res) => {
    if (!req.query.name) {
        return res.send({
            error: 'You must provide a name!'
         })
    }

    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return res.send('Hello ' + req.query.name + '. Current time is ' + dateTime)

})




app.listen(3000 , () => {
    console.log('server is up on port 3000')
})
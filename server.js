// require express
const express = require('express')
const app = express()
//port varible
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
       },
    'chance the rapper':{
        'age':29,
        'birthName':'Chancelor Johnathan Bennett',
        'birthLocation':'Chicago, Illinois'
       },
    'the notorious b.i.g.':{
        'age':'dead',
        'birthName':'Christopher George Latore Wallace',
        'birthLocation':'Brooklyn, New York City,'
       },
    'dylan':{
        'age':'29',
        'birthName':'Dylan',
        'birthLocation':'Dylan'
       },

   


}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
//get the rappers name
app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})

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
       'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
       }

   


}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
        response.json(rappers)
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})

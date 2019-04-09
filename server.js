const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



// -------------------- Seed Data ------------------


const burger = [
    'Hamberger',
    'Chess Burger',
    'Vegi Burger'

];



// -------------------- Middleware------------------

// Serve Static Folder
app.use(express.static('public'));




// -------------------- Routes------------------

// GET Root
app.get('/', (req,res)=>{


});


app.get('/api/burger', (req,res)=>{
    res.json(burgers);
});
// http://localhost:3000/api/taquerias


app.get('/pick-a-color/:choice',(req,res)=>{
    res.send(`<h1>Pick a color ${req.params.choice}</h1>`)
});

app.get('/pick-a-name/:name',(req,res)=>{
    res.send(`<h1>Pick a name ${req.params.name}</h1>`)
});
// http://localhost:3000/pick-a-name/Kate

app.get('/pick-a-name',(req,res)=>{
    res.send(`<h1>Pick a name ${req.query.Firstname}</h1>`)
});
http://localhost:3000/pick-a-name?Firstname=Kate


// query
app.get('/pick-a-color',(req,res)=>{
    res.send(`<h1>Pick a color ${req.query.color}</h1>`)
});
    // http://localhost:3000/pick-a-color?color=blue


app.get('/get-some-number',(req,res)=>{
    res.send(`<h1>Get some numer ${req.query.number}</h1>`)
});
    // http://localhost:3000/get-some-number?number=2&number=3


app.get('/multiply', (req,res)=> {
    const result = parseInt(req.query.x)*parseInt(req.query.y);
    res.send(`The result is ${result}`);
});


// -------------------- Start Sever on Port 3000------------------

app.listen(PORT,()=> console.log(`Servine running on port ${PORT}`));
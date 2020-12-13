const express = require ("express");
const app = express();
const path = require("path")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 
   '/views'))
app.use(express.static(path.join(__dirname, 
    'public')))

// app.use((req, res) => {console.log("request")
// res.send("page content")});
app.get('/', (req,res) => {res.render('home')})

app.get('/forest_leaders', (req,res) => {res.send("forest leader page here")})

app.get('*', (req, res) => {res.send("We're sorry. That page does not exist :(")})

app.listen (3000, () => {
    console.log("Listening on port 3000")
})


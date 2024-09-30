import express from 'express';

const app = express();
const port = 8080;

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    return res.render('index')
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
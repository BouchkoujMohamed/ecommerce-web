const express = require('express');

const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' })

const app = express();

app.get('/',(req,res)=>{
    res.send("sent a new mohamed api")

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`my App running is the port: http://localhost:${PORT}/`);
})
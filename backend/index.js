const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
// app.use(express.static("public"))
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.header(
    "Access-Control-Allow-Origin",
    "Origin,X-Requested With,Content-Type,Accept"
);
  next();
})
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/Product"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
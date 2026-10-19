const express = require('express')
const fs = require('fs')
const app = express()
// middleware
app.use(express.json())

app.get('/',(req ,res )=>{
    res.send("Server is running!")
})
// function get all products
function getProducts(){
    const data = fs.readFileSync("./data/products.json","utf-8")
    return JSON.parse(data)
}
// save product
function saveProduct(product){
    fs.writeFileSync("./data/products.json",JSON.stringify(product,null,2))
}
// routes
app.get('/api/products',(req ,res)=>{
    const products = getProducts()
    res.json(products)
})
// get one product
app.get('/api/products/:id',(req,res)=>{
    const {id} = req.params
    const products = getProducts()
    const data = products.find((p)=>p.id==id)
    if(!data) return res.status(404).json({message:"Not Found!"})
    res.json(data)
})
// create product
app.post('/api/products',(req,res)=>{
    const products = getProducts()
    const newProduct = {
        id:Date.now(),
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock
    }
    products.push(newProduct)
    saveProduct(products)
    res.json(newProduct)
})


app.listen(8001,()=>{
    console.log(`server http://localhost:8001 running!`)
})

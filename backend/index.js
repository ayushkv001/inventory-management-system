const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/userInventory",{
    useNewUrlParser: true
},()=>{
    console.log("database connected")
})
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(err)=>{
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    quantity : Number
})

const category = new mongoose.Schema({
    name : String,
    products :[productSchema]
})

const userSchema = new mongoose.Schema({
    name : String,
    username :String,
    password : String,
    email : String,
    gender : String,
    categories : [category]
})

const User = new mongoose.model("users",userSchema)

let p1,p2;

app.post("/login",(req,res)=>{
    const {username,password} = req.body
    p1=username
    p2=password
    console.log(req.body)
    User.findOne({username:username},(err,user)=>{
        if(user){
            if(password===user.password){
                console.log(user)
                res.send({message:"LoginSuccesful",user:user})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }
        else{
            res.send({message:"User not registered"})
        }
    }) 
})
app.post("/retreive",(req,res)=>{
    const username =p1
    const password = p2
    console.log(req.body)
    User.findOne({username:username},(err,user)=>{
        if(user){
            if(password===user.password){
                console.log(user)
                res.send({message:"LoginSuccesful",user:user})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }
        else{
            res.send({message:"User not registered"})
        }
    }) 
})

app.post("/register", (req, res)=> {
    const { name, username, password,email,gender} = req.body
    console.log(req.body)
    User.findOne({username: username}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user1 = new User({
                name : name,
                username : username,
                password : password,
                email : email,
                gender:gender,
                categories :[]
            })
            user1.save(err => {
                if(err) {
                    res.send(err)
                    console.log(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(5000,()=>{
    console.log("server is listening")
})
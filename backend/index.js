import express from 'express'
import connectDB from './config/dataBase.js'
import cors from 'cors'
import userRoute from './Route/UserRoute.js'

const app = express()

const PORT = 3001
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',userRoute)


app.listen(PORT, ()=> console.log(`Server Started on ${PORT}`))
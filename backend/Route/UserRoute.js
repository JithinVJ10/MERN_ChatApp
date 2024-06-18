import express from 'express'
import { userLogin } from '../Controller/UserController.js'

const route = express.Router()

route.get('/', userLogin)

export default route
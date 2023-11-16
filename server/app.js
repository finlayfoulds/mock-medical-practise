import express from "express"
import bodyParser from "body-parser"
import bcrypt from "bcrypt"
import mysql from "mysql2"
import dotenv from "dotenv"
import session from "express-session"
import cors from "cors"
import { join, dirname} from 'path'
import { fileURLToPath } from 'url'

dotenv.config()
const port = process.env.PORT || 3000
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));

//express middleware
app.use(express.static(__dirname + "static"));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: process.env.ORIGIN }))
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
}))

//connect MySQL db
var db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

app.get("/api", (req, res) => {
  return res.json({ message: "hello world from server "})
})

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`)
})
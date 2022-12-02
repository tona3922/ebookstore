import express from 'express';
// import bookController from './app/controller/bookController';
import route from './routes/index.js'
import connectDB from './models/database.js'
import cors from 'cors'
const app = express()
const port = 8080

app.use(cors())

route(app)

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);
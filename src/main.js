import express from 'express';
import routes from './routes/image-menu.js';
import logsRequest from './middleware/logs.js';
import cors from 'cors'
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://127.0.0.1:5173/',
  methods: 'GET'
}))
app.use('/image', routes)
app.use(logsRequest)

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}!`)
})
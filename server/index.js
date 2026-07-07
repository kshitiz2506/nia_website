import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import contactRouter from './routes/contact.js'

const app = express()
const port = Number(process.env.PORT) || 3001

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/contact', contactRouter)

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'Something went wrong. Please try again later.' })
})

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`)
})

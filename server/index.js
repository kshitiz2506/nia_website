import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import contactRouter from './routes/contact.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, '..', 'dist')

const app = express()
const port = Number(process.env.PORT) || 3001
const isProd = process.env.NODE_ENV === 'production'

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || (isProd ? true : 'http://localhost:5173'),
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/contact', contactRouter)

app.use(express.static(distPath, { index: false }))

app.get('/{*path}', (req, res, next) => {
  if (req.path.startsWith('/api')) return next()
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) next(err)
  })
})

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'Something went wrong. Please try again later.' })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

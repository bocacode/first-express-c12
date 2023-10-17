import express from 'express'

const app = express()

app.get("/students", (request, response) => {
  response.send(['Joelle', 'Mesut', 'Andy', 'John', 'Tre'])
})

app.get("/hello", (request, response) => {
  response.send("Hello, there!")
})

// app.get("/", (req, res) => res.send("Works!"))

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000...')
})

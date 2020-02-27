require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const PhoneNumber = require('./models/phoneNumber')

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
morgan.token('body', (req,res) => {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


app.get(`/api/persons/:id`, (req,res) => {
  PhoneNumber.findById(req.params.id)
    .then(phoneNumber => {
      res.json(phoneNumber)
    })
    .catch(error => {
      console.log(error)
      res.status(404).end()
    })
})

app.get('/info', (req, res) => {
  PhoneNumber.find({}).then(phoneNumbers => {
    res.send(`<div><p>Phonebook has info for ${phoneNumbers.length} people</p></div> <div><p>${Date()}</p><div/>`)
  })
})

app.get('/api/persons', (req, res) => {
  PhoneNumber.find({}).then(phoneNumbers => {
    res.json(phoneNumbers)
  })
})

app.delete(`/api/persons/:id`, (req, res) => {
  PhoneNumber.findByIdAndRemove(req.params.id)
    .then(result => {
      console.log(`${req.params.id} removed.`)
      res.status(204).end()
    })
    .catch(error => {
      console.log(error)
      res.status(400).end()
    })
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  if (Object.keys(person).length > 2) {
    res.status(400).json({
      error: 'Only name and number information is accepted.'
    })
    return
  }
  if (!person.name || !person.number) {
    res.status(400).json({
      error: 'Name or number missing.'
    })
    return
  }
  
  const phoneNumber = new PhoneNumber({
    name: person.name,
    number: person.number,
    })
  
  phoneNumber.save().then(savedNumber => {
    res.json(savedNumber)
  })
})

app.put(`/api/persons/:id`, (req, res) => {
  const person = req.body
  PhoneNumber.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedNumber => {
      res.json(updatedNumber)
    })
    .catch(error => {
      console.log(error)
      res.status(400).end()
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
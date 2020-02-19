const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('Give password as first argument and name and number as second and third arguments')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-kkkvl.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const phoneNumberSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const PhoneNumber = mongoose.model('PhoneNumber', phoneNumberSchema)

if ( process.argv.length<4 ) {
  console.log('phonebook:')
  PhoneNumber.find({}).then(result => {
    result.forEach(phoneNumber => {
      console.log(`${phoneNumber.name} ${phoneNumber.number}`)
    })
    mongoose.connection.close()
  })
}

if ( process.argv.length==5 ) {
  const name = process.argv[3]
  const number = process.argv[4]

  const phoneNumber = new PhoneNumber({
    name: name,
    number: number,
  })

  phoneNumber.save().then(response => {
    console.log(`Added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  })
}
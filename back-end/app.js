const express = require('express'); //import d'express
const app = express(); // création de l'app mais qui contient rien avec la méthode express

app.use((req, res, next) => { //middleware permettant de faire la route
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use('/api/products', (req, res, next) => { // c'est la route d'accès à l'API avec l'extentions
  const products = [
    {
      _id: 'oeihfzeoi',
      title: 'Fender Stratocaster American Pro II',
      description: "La série American Pro II, c'est la Fender d'aujourd'hui.",
      imageUrl:
        'https://www.musik-produktiv.fr/pic-010124394xxl/fender-american-professional-ii-stratocaster-hss-rw-mbl.jpg',
      price: 4900, //centimes
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Fender Telecaster American Pro II',
      description:
        "La série American Pro II, c'est la Fender d'aujourd'hui. Des instruments classiques avec des options de surclassement en business class !",
      imageUrl:
        'https://www.musik-produktiv.fr/pic-010124439xxl/fender-american-professional-ii-telecaster-mn-btb.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ]
  res.status(200).json(products) // code 200 => Succes et renvoi le stuff
})

module.exports = app; //export de la constante app
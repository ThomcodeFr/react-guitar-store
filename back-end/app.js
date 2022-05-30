const express = require('express') //import d'express
const app = express() // création de l'app mais qui contient rien avec la méthode express

app.use((req, res, next) => {
  //middleware permettant de faire la route
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

app.use('/api/products', (req, res, next) => {
  // c'est la route d'accès à l'API avec l'extentions
  const products = [
    {
      _id: '0000001',
      title: 'Fender Stratocaster AP II',
      description: "La série American Pro II, c'est la Fender d'aujourd'hui.",
      imageUrl:
        'https://www.musik-produktiv.fr/pic-010124394xxl/fender-american-professional-ii-stratocaster-hss-rw-mbl.jpg',
      price: 4900, //centimes
      userId: 'user01',
    },
    {
      _id: '0000002',
      title: 'Fender Telecaster AP II',
      description:
        "La série American Pro II, c'est la Fender d'aujourd'hui. Des instruments classiques avec des options de surclassement en business class !",
      imageUrl:
        'https://www.musik-produktiv.fr/pic-010124439xxl/fender-american-professional-ii-telecaster-mn-btb.jpg',
      price: 2900,
      userId: 'user02',
    },
    {
      _id: '0000003',
      title: 'Fender Jaguar',
      description:
        'La Fender Jaguar est un modèle de guitare électrique créé par la marque Fender en 1962',
      imageUrl:
        'https://images.musicstore.de/images/1280/fender-american-original-60s-jaguar-rw-daphne-blue_1_GIT0052274-000.jpg',
      price: 1900,
      userId: 'user03',
    },
    {
      _id: '0000004',
      title: 'Fender Jazz Bass',
      description:
        'Cette Jazz Bass est étonnante, des sons clairs et forts dans toute la gamme de fréquences.',
      imageUrl:
        'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/500416/15749726_800.jpg',
      price: 1799,
      userId: 'user04',
    },
    {
      _id: '0000005',
      title: 'Gibson Les Paul Standard',
      description:
        'La Les Paul Standards made by Gibson between 1958 and the end of 1960',
      imageUrl:
        'https://images.reverb.com/image/upload/s--0gUjSiDd--/f_auto,t_large/v1567715486/qu9fmrubhf6paiuvj9pc.jpg',
      price: 7799,
      userId: 'user05',
    },
    {
      _id: '0000005',
      title: 'Gibson Flying V',
      description:
        'Guitare électrique GIBSON modèle Flying V Introduite en 1958',
      imageUrl:
        'https://www.musik-produktiv.fr/pic-010140896xxl/gibson-custom-shop-1958-korina-flying-v.jpg',
      price: 999,
      userId: 'user05',
    },
  ]
  res.status(200).json(products) // code 200 => Succes et renvoi le stuff
})

module.exports = app //export de la constante app

import { useState, useEffect } from 'react'
import '../assets/css/productsApi.css'

function MusicProducts() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [stuff, setStuff] = useState([])
  const [cart, updateCart] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3001/api/stuff')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.name)
          setIsLoaded(true)
          setStuff(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>
  } else if (!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return (
      <ul className="productTableSection">
        {stuff.map(({ title, description, price, imageUrl }) => (
          <ul className="productTable">
            <img
              src={imageUrl}
              className="imageGuitare"
              alt="Image d'une guitare"
            />
            <li>{title}</li>
            <button onclick={description}>Description</button>
            <li>{price} €</li>
            <button onClick={() => updateCart(price + 1)}>
              Ajouter au panier 🛒
            </button>
            <h3>Total : {price * cart}€</h3>
          </ul>
        ))}
      </ul>
    )
  }
}

export default MusicProducts
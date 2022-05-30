import Headerperso from './components/Headerperso'
import './App.css'
import ObjetsList from './components/ObjetsList.js'
import Cart from './components/Cart.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Headerperso />
      <main className="appContent">
        <h2> Liste des produits</h2>
        <ObjetsList />
        <Cart />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App

import Headerperso from './components/Headerperso'
import './App.css'
import BannerPicture from './components/BannerPicture'
import ProductsApi from './components/ProductsApi'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Headerperso />
      <main className="appContent">
        <section className="bannerPicture">
          <BannerPicture />
        </section>
        <section className='productList'>
          <h2> Liste des produits</h2>
          <ProductsApi />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App

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
        <section className="content">
          <h2> Les nouveautés Rock !</h2>
          <div className="ProductList">
            <ProductsApi />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App

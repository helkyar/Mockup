import './css/App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;

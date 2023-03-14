import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ModelsCar from './components/modelsCar/ModelsCar';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import News from './components/news/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ModelsCar />
      <Banner />
      <News />
      <Footer />
    </div>
  );
}

export default App;

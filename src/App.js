
import './App.css';
import Carousel from './Components/Header/Carousel/Carousel';
import Header from './Components/Header/Header';
import Card from "./Components/Header/Card/Card";
import News from './Components/Header/News/News';
import Footer from './Components/Header/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header/>
        <Carousel/>
        <Card/>
        <News/>

      </div>
      <Footer/>
    </div>
  );
}

export default App;

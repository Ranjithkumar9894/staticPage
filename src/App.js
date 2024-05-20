import './App.css';
import Header from './Components/Header'
import PhotoCollection from './Components/PhotoCollection';
import Swiper from './Components/Swiper'
function App() {
  return (
    <div className="App">
      <Header />
      <Swiper />
      <PhotoCollection />
    </div>
  );
}

export default App;

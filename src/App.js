import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HomeHeading from './HomeHeading/HomeHeading';
import Home from './Home/Home'
function App() {

  return (
    <div className="App">
      <Header/>
      <HomeHeading/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

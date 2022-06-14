import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Leftbar from './components/Leftbar';
import Mainbar from './components/Mainbar';
import Rightbar from './components/Rightbar';
import Rightfooter from './components/Rightfooter';


function App() {
  return (
    <div className="App">
      <Header/>
      <Leftbar/>
      <Mainbar/>
      <Rightbar/>
      <Footer/>
      <Rightfooter/>
    </div>
  );
}

export default App;

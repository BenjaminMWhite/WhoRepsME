import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import {useState} from 'react'

function App() {
const [navPage, setNavPage] = useState("Portfolio" )


  return (
    <div className="App" >
     <Header navPage={navPage} setNavPage={setNavPage} /> 
      <Main navPage={navPage} />
     <Footer /> 
    
    </div>
  );
}

export default App;

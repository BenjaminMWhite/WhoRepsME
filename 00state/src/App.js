import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import {useState, useEffect} from 'react'

function App() {
const [navPage, setNavPage] = useState("Portfolio" )


  return (
    <div className="App" >
     <Header navPage={navPage} setNavPage={setNavPage} /> 
      <Content navPage={navPage} />
     <Footer /> 
    
    </div>
  );
}

export default App;

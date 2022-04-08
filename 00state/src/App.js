import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import {useState, useEffect} from 'react'

function App() {
  const APIKey ="AIzaSyCC2qVOqKfM-1QGPIKXKFQhe5Km0qCJuic"

var site = "https://www.googleapis.com/civicinfo/v2/representatives?key="+ APIKey +"&address=208smarylandave%20youngstown%20oh"
const [navPage, setNavPage] = useState("Portfolio" )
const [data,setData] =useState({})
useEffect(() =>{
  information()
},[])
function information (){ 
 
    return fetch(site)
    .then(response => response.json())
    // .then(data => console.log(data.officials.length))
    .then(data =>  setData(data)
     
  //     var name= data.officials[i].name
  //     var address=data.officials[i].address
  //     var party=data.officials[i].party
  //     var phone=data.officials[i].phone
  //     var website=data.officials[i].urls[0]
  //     if (data.officials[i].photoUrl !=null)
  //     {var photo =data.officials[i].photoUrl}
  //     console.log(data.officials[i].photoUrl)}
  
  
  
    
  )}
  
  async function office(){
    var k=0
    let i=34
    officeA()
    function officeA(){
     var j=0
     officeB()
     function officeB(){
     if (i===data.offices[k].officialIndices[j])
     {console.log(data.offices[k].name) }
     else if (!data.offices[k].officialIndices[j] )
     {k++ 
      officeA()  }
    else if (data.offices[k].officialIndices[j]!=i )
    { j++
     officeB()}
    }
    }
    }
   
  
office()

   return (
    <div className="App" >
     <Header navPage={navPage} setNavPage={setNavPage} /> 
      <Content navPage={navPage} />
     <Footer /> 
    
    </div>
  );
}






 

export default App;

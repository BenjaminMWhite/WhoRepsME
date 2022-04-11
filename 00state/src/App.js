import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
// import {useState} from 'react'
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
function App() {

//   const APIKey ="AIzaSyCC2qVOqKfM-1QGPIKXKFQhe5Km0qCJuic"

// var site = "https://www.googleapis.com/civicinfo/v2/representatives?key="+ APIKey +"&address=208smarylandave%20youngstown%20oh"
// const [navPage, setNavPage] = useState("Portfolio" )
// const [data,setData] =useState({})
// useEffect(() =>{
//   information()
// },[])
// function information (){ 

 
//     return fetch(site)
//     .then(response => response.json())
//     // .then(data => console.log(data.officials.length))
//     .then(data =>  setData(data)
     
//   //     var name= data.officials[i].name
//   //     var address=data.officials[i].address
//   //     var party=data.officials[i].party
//   //     var phone=data.officials[i].phone
//   //     var website=data.officials[i].urls[0]
//   //     if (data.officials[i].photoUrl !=null)
//   //     {var photo =data.officials[i].photoUrl}
//   //     console.log(data.officials[i].photoUrl)}
  
  
  
    
//   )}
  
//   async function office(){
//     var k=0
//     let i=34
//     officeA()
//     function officeA(){
//      var j=0
//      officeB()
//      function officeB(){
//      if (i===data.offices[k].officialIndices[j])
//      {console.log(data.offices[k].name) }
//      else if (!data.offices[k].officialIndices[j] )
//      {k++ 
//       officeA()  }
//     else if (data.offices[k].officialIndices[j]!=i )
//     { j++
//      officeB()}
//     }
//     }
//     }
   
  
// office()
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
  
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
   return (
     <ApolloProvider client ={client}> 
   <Router>
    <div className="App" >
     <Header  />
     <Routes>
       <Route path="/" element={ <Main />} /> 
       <Route path="/login" element={ <Login />} /> 
       <Route path="/signUp" element={ <Signup />} /> 
      </Routes> 
     <Footer /> 
    
    </div>
    </Router>
    </ApolloProvider>
  );
}






 

export default App;

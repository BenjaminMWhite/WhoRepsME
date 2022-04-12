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
import { useEffect, useState } from 'react';
let defaultAddress = {address:"", city:"", state:""}
function App() {
const [address, setAddress] = useState( defaultAddress)
useEffect(() => {
  console.log(address)},[address])
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
       <Route path="/" element={ <Main address={address} />} /> 
       <Route path="/login" element={ <Login />} /> 
       <Route path="/signUp" element={ <Signup address={address} setAddress={setAddress} />} /> 
      </Routes> 
     <Footer /> 
    
    </div>
    </Router>
    </ApolloProvider>
  );
}


export default App;

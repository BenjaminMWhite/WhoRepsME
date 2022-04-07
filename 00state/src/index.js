import React from 'react';
import * as reactDom from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById("root");
const container = reactDom.createRoot(root);

container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const APIKey ="AIzaSyCC2qVOqKfM-1QGPIKXKFQhe5Km0qCJuic"

var site = "https://www.googleapis.com/civicinfo/v2/representatives?key="+ APIKey +"&address=208smarylandave%20youngstown%20oh"
function information (){ 
  fetch(site)
  .then(response => response.json())
  // .then(data => console.log(data.officials.length))
  .then(data => {for (let i=0; i <data.officials.length; i++)
  {var name= data.officials[i].name
    var address=data.officials[i].address
    var party=data.officials[i].party
    var phone=data.officials[i].phone
    var website=data.officials[i].urls[0]
    if (data.officials[i].photoUrl !=null)
    {var photo =data.officials[i].photoUrl
  console.log(data.officials[i].photoUrl)}
}}
  )}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
information()
reportWebVitals();

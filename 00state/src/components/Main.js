
// export default Content

import React, { useState, useEffect }  from 'react';
//import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { propTypes } from 'react-bootstrap/esm/Image';

// import Markdown from './Markdown';

function Main(props) {
  // const [navPage, setNavPage] = useState("Portfolio")
  const [info, setInfo] = useState({officials:[]})
  useEffect(() => {
   
    function information() {
      const APIKey = "AIzaSyCC2qVOqKfM-1QGPIKXKFQhe5Km0qCJuic"
      console.log(props.address.address)
      var site = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + APIKey + "&address=" +props.address.address +"%20" +props.address.city+ "%20"+props.address.state
      return fetch(site)
      .then(response => response.json())
      // .then(data => console.log(data.officials.length))
      .then(data => { console.log(data)
         setInfo(data)})
    }
    information()

  }, []);
 
  const title = 'Where'

  const Office = () => { 
    info.officials.map(function(inf){
      return <li key={inf.name}> hey</li>
    })}
    
    
  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
 

        
        
     

        <ol> {info.officials.map(function(inf){
      return <table class="" id="info"> 
      
        
        <tr>
          <h6>NAME:</h6>
     <td id="i2"> Name {inf.name}, </td>
      <h6>PARTY:</h6>
     <td id="i2" > Party {inf.party},</td>
          <h6>PHONE NUMBER:</h6>
     <td id="i2" >   {inf.phones} ,</td>
     <h6>MAILING ADDRESS:</h6>
     <td id="i2" >  {inf.address[0].line1} </td> 
      <td id="i2"> {inf.address[0].city} </td>
      {inf.address[0].state} 
         
         </tr>
         
      </table>

    })}</ol>
     
      <Divider />
   
    </Grid>
  );
}

export default Main;


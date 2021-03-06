// import AboutMe from "./AboutMe"
// import Portfolio from "./Portfolio"
// import Resume from "./Resume"
// function Content(props) {
// const currentSection = props.navPage
// return(<div>
//     <h2>{currentSection}</h2>
//     {props.navPage==="AboutMe" ?  <AboutMe /> : null}
//     {props.navPage==="Portfolio" ?  <Portfolio /> : null}
//     {props.navPage==="Resume" ?  <Resume /> : null}
//      </div>)
// }


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
  // useEffect(() =>{
 
  //   office()
   
  // },[info.officials.length])
  //for (let i=0; i <data.officials.length; i++)


  // const Office = () => { 

  // for (let i = 0; i < info.officials.length; i++)
  // {
  
  //   var k = 0

  // officeA()
  // function officeA() {
  //   var j = 0
  //   officeB()
  //   function officeB() {
  //     if (i === info.offices[k].officialIndices[j]) 
  //     {  function theData() {
  //       return(<div>
  //         hi
  //       {info.officials[i].name}      
  //       {/* <Rep Party={info.officials[i].party} />
  //       <Rep Phone={info.officials[i].phone}  />
  //       <Rep Website={info.officials[i].urls[0]}   />
  //       <Rep Address={info.officials[i].address} />
  //       <Rep Office={info.offices[k]}  /> */}
        
  //       </div>) }
  //       theData()}

  //     else if (!info.offices[k].officialIndices[j])
  //      {
  //       k++
  //       officeA()
  //     }
  //     else if (info.offices[k].officialIndices[j] != i) {
  //       j++
  //       officeB()
  //     }
  //   }
  // }
  // }
  // }
//office()

  // const { posts, title } = props;
  // console.log(title)
  const title = 'Where'

  const Office = () => { 
    info.officials.map(function(inf){
      return <li key={inf.name}> hey</li>
    })}
    // {info.officials[i].name}      
    {/* <Rep Party={info.officials[i].party} />
    <Rep Phone={info.officials[i].phone}  />
    <Rep Website={info.officials[i].urls[0]}   />
    <Rep Address={info.officials[i].address} />
    <Rep Office={info.offices[k]}  /> */}
    


console.log(info)
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >

      <Typography variant="h6" gutterBottom>
        
        <ol> { info.officials? info.officials.map(function(inf){
      return <li key={inf.name}> Name {inf.name}, Party {inf.party}, Phone Number {inf.phones} , Mailing Address {inf.address[0].line1} {inf.address[0].city} {inf.address[0].state}    </li>
      
    }):null }</ol>
      </Typography>
      <Divider />
      {/* {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
    </Grid>
  );
}

// Main.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.string).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Main;


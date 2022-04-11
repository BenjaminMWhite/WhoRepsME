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

// import Markdown from './Markdown';

function Main() {

  // const [navPage, setNavPage] = useState("Portfolio")
  const [info, setInfo] = useState({officials:[]})
  useEffect(() => {
   
    function information() {
      const APIKey = "AIzaSyCC2qVOqKfM-1QGPIKXKFQhe5Km0qCJuic"

      var site = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + APIKey + "&address=208smarylandave%20youngstown%20oh"
      return fetch(site)
      .then(response => response.json())
      // .then(data => console.log(data.officials.length))
      .then(data => { console.log(data)
         setInfo(data)})
    }
    information()

  }, []);
  useEffect(() =>{
 
    office()
   
  },[info.officials.length])
  //for (let i=0; i <data.officials.length; i++)


  function office(){
   console.log(info)
  for (let i = 0; i < info.officials.length; i++)
  {
  
    var k = 0

  officeA()
  function officeA() {
    var j = 0
    officeB()
    function officeB() {
      if (i === info.offices[k].officialIndices[j]) 
      {      var name= info.officials[i].name
             var address=info.officials[i].address
             var party=info.officials[i].party
             var phone=info.officials[i].phone
             var website=info.officials[i].urls[0]
             var position =info.offices[k]
         console.log(info.offices[k]) }
      else if (!info.offices[k].officialIndices[j])
       {
        k++
        officeA()
      }
      else if (info.offices[k].officialIndices[j] != i) {
        j++
        officeB()
      }
    }
  }
  }
  }
//office()

  // const { posts, title } = props;
  // console.log(title)
  const title = "WhoRepsMe"
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
      <div>Hi</div>
      <Typography variant="h6" gutterBottom>
        {title}
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


        //     var name= data.officials[i].name
        //     var address=data.officials[i].address
        //     var party=data.officials[i].party
        //     var phone=data.officials[i].phone
        //     var website=data.officials[i].urls[0]
        //     if (data.officials[i].photoUrl !=null)
        //     {var photo =data.officials[i].photoUrl}
        //     console.log(data.officials[i].photoUrl)}

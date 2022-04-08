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

import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Markdown from './Markdown';

function Main(props) {
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

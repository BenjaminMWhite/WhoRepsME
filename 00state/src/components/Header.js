// import Navigation from "./Navigation"

// function Header(props) {
//     return(
//         <div id="Header"> 
// <h1>Who Reps Me</h1>
// <Navigation />
// {/* login sign up sign out */}
// {/* next election date */}
// </div>
// )
// }


// export default Header

import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigation from './Navigation';
function Header() {

    
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
        >
        <h2 id='title'>Who Reps ME</h2> 
        </Typography>
        <Button variant='outlined' size='small'>
          Sign up
        </Button>
        <Button variant='outlined' size='small'>
        Log Out
        </Button>
        <Button variant='outlined' size='small'>
        Log In
        </Button>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: 'center', overflowX: 'auto' }}
      >
        {/* {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))} */}
      <Navigation />
      </Toolbar>
<div>
<h1> Search for your representatives  </h1>







</div>


    </React.Fragment>
  );
}

export default Header;
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import {Link} from 'react-router-dom'
export default function BasicButtons(props) {
 console.log(props)
  return (
    <ButtonGroup  variant='contained'>
       
       <Button variant="contained" component={Link} to={props.location}>
    {props.name}
  </Button>
    </ButtonGroup>
  );
}
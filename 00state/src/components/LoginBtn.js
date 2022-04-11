import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'

export default function BasicButtons(props) {
  return (
    <ButtonGroup variant='contained'>
      <Button variant='contained'>{props.name}</Button>
    </ButtonGroup>
  );
}
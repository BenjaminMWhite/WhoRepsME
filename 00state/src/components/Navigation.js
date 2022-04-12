import { Nav } from 'react-bootstrap'
import BasicButtons from './LoginBtn'
import Auth  from '../utils/auth'
import { Button } from '@mui/material'
function Navigation(props) {
    const logIn = 'Log In'
    const signUp = 'Sign Up'
    return(
    <Nav>
    <BasicButtons name={logIn} location='/login' />
    <Button variant="contained" onClick={Auth.logout} location= '#' >LogOut</Button>
    <BasicButtons name={signUp} location = '/signUp'/>
    </Nav>
    )
    }
    
    
    export default Navigation
import { Nav } from 'react-bootstrap'
import BasicButtons from './LoginBtn'
import Auth  from '../utils/auth'
import auth from '../utils/auth'
function Navigation(props) {
    const logIn = 'Log In'
    const logOut = 'Log Out'
    const signUp = 'Sign Up'
    return(
    <Nav>
    <BasicButtons name={logIn} location='/login' />
    <BasicButtons name={logOut} onClick={Auth.logout} location= '#' />
    <BasicButtons name={signUp} location = '/signUp'/>
    </Nav>
    )
    }
    
    
    export default Navigation
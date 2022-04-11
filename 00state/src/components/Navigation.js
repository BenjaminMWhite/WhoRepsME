import { Nav } from 'react-bootstrap'
import BasicButtons from './LoginBtn'
function Navigation(props) {
    const logIn = 'Log In'
    const logOut = 'Log Out'
    const signUp = 'Sign Up'
    return(
    <Nav>
    <BasicButtons name={logIn}/>
    <BasicButtons name={logOut}/>
    <BasicButtons name={signUp}/>
    </Nav>
    )
    }
    
    
    export default Navigation
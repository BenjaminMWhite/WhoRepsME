import { Nav } from 'react-bootstrap'
import BasicButtons from './LoginBtn'
function Navigation(props) {
    const logIn = 'Log In'
    const logOut = 'Log Out'
    const signUp = 'Sign Up'
    return(
    <Nav>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="login">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="signup">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  </Nav.Item>
    </Nav>
    )
    }
    
    
    export default Navigation
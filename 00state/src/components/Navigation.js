import { Nav } from "react-bootstrap"
function Navigation(props) {
    return(
    <Nav>
     <Nav.Item className={props.navPage === "Portfolio" ? "selectednav" : null} onClick={() =>{props.setNavPage("Portfolio")}  } >Portfolio</Nav.Item>
     <Nav.Item className={props.navPage === "Resume" ? "selectednav" : null} onClick={() =>{props.setNavPage("Resume")} } >Resume</Nav.Item>
     <Nav.Item className={props.navPage === "AboutMe" ? "selectednav" : null} onClick={() =>{props.setNavPage("AboutMe")}} >About Me</Nav.Item>
    </Nav>
    
    
    )
    }
    
    
    export default Navigation
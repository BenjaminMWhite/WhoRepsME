import Navigation from "./Navigation"

function Header(props) {
return(
<div id="Header"> 
<h1>Benjamin M. White</h1>
<Navigation navPage={props.navPage} setNavPage= {props.setNavPage} /></div>
)
}


export default Header
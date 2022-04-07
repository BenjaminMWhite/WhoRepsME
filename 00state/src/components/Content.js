import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Resume from "./Resume"
function Content(props) {
const currentSection = props.navPage
return(<div>
    <h2>{currentSection}</h2>
    {props.navPage==="AboutMe" ?  <AboutMe /> : null}
    {props.navPage==="Portfolio" ?  <Portfolio /> : null}
    {props.navPage==="Resume" ?  <Resume /> : null}
     </div>)
}


export default Content
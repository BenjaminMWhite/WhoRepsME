

function ProjectPiece(props) {
return(
<div>
<h3>{props.title}</h3>

<a href={props.deployedlink ? props.deployedlink : props.githublink}> <img src={props.image} /> </a>
</div>
    )
}




export default ProjectPiece
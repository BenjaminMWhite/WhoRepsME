

function ProjectPiece(props) {
return(
<div>
<h3>{props.title}</h3>

<a href={props.deployedlink ? props.deployedlink : props.githublink}> <img src={props.image} /> </a>
 {/* if this rep exits, then "name, title, party, phone number email"  else null
  if this rep and photo exist then photo else null
 if this rep and twitter exist then twitter else null.
 if this rep and facebook exist then facebook else null. */}
</div>
    )
}


export default ProjectPiece
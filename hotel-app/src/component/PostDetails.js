import React from 'react'

const PostDetails= (props) =>{
       console.log(props.match.params.topic)
    return(
<div className="panel panel-danger">

        <div className="panel-heading"> 
    <h3> {props.match.params.topic}</h3>
</div>
        <div className="panel-body ">
    <div class="jumbotron">
                <p><strong>{props.match.params.topic}</strong>:--------  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
      
    </div>
             
</div>

</div>

             
    )
}

export default PostDetails;

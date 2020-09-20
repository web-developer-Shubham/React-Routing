import  React from 'react'
import {Link} from 'react-router-dom'
const Post= () =>{
    return (
    
    <div className="panel panel-success">

        <div className="panel-heading">
        
            <h3>Post Page</h3>
        </div>
            <div className="panel-body ">
                <div class="jumbotron">
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” .</p>
            <h3>React-js</h3>
            <Link to="/Post/React">Details</Link>
             <h3>Angular</h3>
              <Link to="/Post/Angular">Details</Link>
              <h3>vue</h3>
                <Link to="/Post/Vue">Details</Link>
          </div>
         </div>
    </div>

    )

}

export default Post;
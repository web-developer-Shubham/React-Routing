import React  from 'react'
import {BrowserRouter, Route, Link} from  'react-router-dom';
import Header from './Header'
import Footer  from './Footer'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import PostDetails from './PostDetails'



const Routing = ()=>{

return(
    <BrowserRouter>
  
            <Header/>
             <Route exact path="/" component={Home}></Route>
             <Route exact path="/Post" component={Post}></Route>
             <Route path="/Post/:topic" component={PostDetails}></Route>
             <Route path="/Profile" component={Profile}></Route>
            
             <Footer/>

</BrowserRouter>
)

}
export default Routing;
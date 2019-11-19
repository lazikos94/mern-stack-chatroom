import React, { Component } from 'react';
import "../css/home.css"
import {connect} from 'react-redux';

class Home extends Component{
    render(){

        const {posts} = this.props
        const postlist = posts.map((post,index)=>{
            return(
                <div key={index}>
                    <h1 id="intro">{post.intro}</h1>
                    <h3 id="references">{post.references}</h3>
                    <p id="description">{post.description}</p>
                </div>
            )
        })
        return(
            <div id="container">
                {postlist}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {posts: state.posts}
}
/*const mapDispatchToProps=(dispatch)=>{
    return{
        functionname: input=>{
            dispatch({function inputs})
        }
    }
}*/
//we add mapstatetoprops in connect

export default connect(mapStateToProps)(Home);
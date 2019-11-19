import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import '../css/start-page.css';
import NavigationBar from "../components/navbar";
import Register from "../components/register";
import Home from "../components/home";
import Footer from "../components/footer";
import Login from "../components/login";

class Start extends Component{
    
    render(){
        return(
            <div id="start_page">
            <NavigationBar/>
            <Switch>
                <Route path="/homepage/introduction" component={Home}/>
                <Route path="/homepage/login" component={Login}/>
                <Route path="/homepage/register" component={Register}/>
            </Switch>
            <Footer/>
            </div>
        );
    }
}
export default Start;
import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import auth from '../components/auth'

const PrivateRoute = ({ component: Component,...rest }) => {
    return(
        <Route {...rest} 
            render = {(props)=>{
                if (auth.authenticated||auth.isLoading){
                    return <Component {...props}/>
                }else{
                    return (<Redirect to={{pathname:'/homepage/login',state:{from:props.location}}}/>
                )}
            }}
        />
    )
};
export default PrivateRoute;
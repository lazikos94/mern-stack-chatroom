import React from 'react';
import '../../css/profile.css'

const Profile = (props)=>{
    return(
        <div className='profile' style={{display:props.display}}>
            <p className='sel_name_stuff'>{props.data.firstname} {props.data.lastname}</p>
            <p className='contact_info'>Contact Info</p>
            <span className='sel_username_stuff'>Username: {props.data.username} </span><br/>
            <span className='sel_user_email'>Email: {props.data.email}</span><br/>
            <span className='sel_user_age'>Age: {props.data.age}</span><br/>
            <span className='sel_user_job'>Job: {props.data.job}</span><br/>
            <p className='sel_user_description'>{props.data.description}</p>
        </div> 
    )
}

export default Profile;
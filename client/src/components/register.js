import React, { Component } from 'react';
import { Button,Form,Col} from 'react-bootstrap';
import axios from 'axios';
import "../css/register.css"

export default class Register extends Component{
    constructor(props){
        super(props);

        this.onChangeFirstname= this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeJob = this.onChangeJob.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            confirmpassword:'',
            email:'',
            age: 0,
            job:'',
            description:'',
        }
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    onChangeConfirmPassword(e){
        this.setState({
            confirmpassword:e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    onChangeFirstname(e){
        this.setState({
            firstname:e.target.value
        })
    }
    onChangeLastname(e){
        this.setState({
            lastname:e.target.value
        })
    }
    onChangeAge(e){
        this.setState({
            age:e.target.value
        })
    }
    onChangeJob(e){
        this.setState({
            job:e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        let confirmpassword =this.state.confirmpassword;
        const data={
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            age:this.state.age,
            job:this.state.job,
            description:this.state.description
        }
        if (data.password !==confirmpassword){
            alert("pass dont match")
        }else{
            axios.post('http://localhost:5000/register',data).then(res=>console.log(res.data));
            window.location="/login"
        }
    }
    
    render(){
        return(
            <div id="container1">
                <Form onSubmit={this.onSubmit}>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group  as={Col}>
                            <Form.Label id="label8">Firstname</Form.Label>
                            <Form.Control id="input8" as="input" type="text" icon="user" placeholder="Enter Your Firstname" onChange={this.onChangeFirstname} value={this.state.firstname}/>
                        </Form.Group>
                        <Form.Group  as={Col}>
                            <Form.Label id="label9">Lastname</Form.Label>
                            <Form.Control id="input9" as="input" type="text" icon="user" placeholder="Enter Your Lastname" onChange={this.onChangeLastname} value={this.state.lastname}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group  as={Col}>
                            <Form.Label id="label1">Username</Form.Label>
                            <Form.Control id="input1" as="input" type="text" icon="user" placeholder="Enter Username" onChange={this.onChangeUsername} value={this.state.username}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label id="label2">Email Address</Form.Label>
                            <Form.Control id="input2" as="input" type="email" placeholder="Enter Email" onChange={this.onChangeEmail} value={this.state.email}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label id="label3" >Password</Form.Label>
                            <Form.Control id="input3" as="input" type="password" placeholder="Enter Password" onChange={this.onChangePassword} value={this.state.password}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label id="label4">Confirm Password</Form.Label>
                            <Form.Control id="input4" as="input" type="password" placeholder="Confirm Password" onChange={this.onChangeConfirmPassword} value={this.state.confirmpassword}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label id="label5">Age</Form.Label>
                            <Form.Control id="input5"  as="input" type="number" icon="lock" placeholder="Enter Your Age" onChange={this.onChangeAge} value={this.state.age}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label id="label6">Job</Form.Label>
                            <Form.Control id="input6" as="input" type="text" placeholder="What Is Your Job?" onChange={this.onChangeJob} value={this.state.job}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label id="label7">Description</Form.Label>
                            <Form.Control id="textarea" as="textarea" rows="3" onChange={this.onChangeDescription} value={this.state.description} placeholder='Describe What You Do'/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-md-center">
                        <Button variant="primary" type="submit" size="lg" block>
                            Register
                        </Button>
                    </Form.Row>
                </Form>
            </div> 
        );
    }
}
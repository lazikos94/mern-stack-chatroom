import React, { Component } from 'react';
import { Button,Form,} from 'react-bootstrap';
import axios from 'axios';
import '../css/login.css';
import auth from "../components/auth";
import io from "socket.io-client";



export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:'',
            password:'',
        }
        this.socket = io.connect('http://localhost:5000/')
        
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
    async onSubmit(e){
        e.preventDefault();
        const data={
            username:this.state.username,
            password:this.state.password
        }
        try{
            let match = await axios.post('http://localhost:5000/login',data)
            if (match.data){
                auth.login(()=>{
                    this.props.history.push(`/chat/${data.username}`)
                })
                this.socket.emit('user_connected',data.username)
            }else{
                alert('Wrong Pass')
            }
        }catch(error){
            alert('No such user exists')
        }
    }
    render(){
        return(
            <div  id="container2">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label id="label">Username</Form.Label>
                        <Form.Control id="input1" as="input" type="text" placeholder="Enter Username" onChange={this.onChangeUsername} value={this.state.username}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="label">Password</Form.Label>
                        <Form.Control id="input2" as="input" type="password" placeholder="Enter Password" onChange={this.onChangePassword} value={this.state.password}/>
                    </Form.Group>
                    <Form.Row className="justify-content-md-center">
                        <Button variant="primary" type="submit" size="lg" block>
                            Login
                        </Button>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

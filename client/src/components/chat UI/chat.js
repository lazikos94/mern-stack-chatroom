import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import React, {Component} from 'react'
import "../../css/chat.css"
import {Navbar,Form} from 'react-bootstrap'
import axios from 'axios';
import Messages from './message'
import ActiveUsers from './activeusers'
import Profile from "./profile"
import auth from '../auth'
import MessagesNavbar from "./navbar_chat"
import io from "socket.io-client";
import {animateScroll} from "react-scroll"



export default class Chat extends Component{

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onClick=this.onClick.bind(this);
        this.onLogout=this.onLogout.bind(this);
        this.addData=this.addData.bind(this);
        this.state={
            loggedin_user:null,
            data:{
                id:null,
                firstname:null,
                lastname:null,
                username:null,
                email:null,
                age:null,
                job:null,
                description:null,
            },
            messages:[],
            message:'',
            display:'none',
            connected_users:[],
        }
        this.socket = io.connect('http://localhost:5000/')

        this.socket.on('receive_message',(data)=>{
            this.setState({messages:[...this.state.messages,data]});
        })

    }
    componentDidMount(){
        if(this.props.match.params.username){
            axios.get(`http://localhost:5000/get/${this.props.match.params.username}`).then(res=>{
                this.setState({
                    loggedin_user:this.props.match.params.username
                })
                this.setStateData(res.data);
            })
            axios.get('http://localhost:5000/get_messages').then(res=>{
                let data = res.data;
                data.forEach((item)=>{
                    let message={
                        username:item.username,
                        message:item.message
                    }
                    console.log(message)
                    this.setState({
                        messages:[...this.state.messages,message]
                    })
                })

            })
        }
        this.scrollToBottom();
    }
    componentDidUpdate(){
        this.scrollToBottom();
    }
    componentWillUnmount() {
        auth.logout(()=>{
            this.socket.emit('component_unmounted',this.props.match.params.username)
        })
    }
    setStateData(e){
        this.setState({
            data:{
                id:e._id,
                firstname:e.firstname,
                lastname:e.lastname,
                username:e.username,
                email:e.email,
                age:e.age,
                job:e.job,
                description:e.description
            }
        })

    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.message!==''){
            let messages={
                username:this.state.loggedin_user,
                message:this.state.message
            }
            axios.post(`http://localhost:5000/post_message/`,messages).then(res=>console.log(res.data))
            this.socket.emit('send_message',messages)
            this.setState({
                message:''
            })
        }
    }
    onChangeMessage(e){
        this.setState({
            message:e.target.value
        })
    }
    onClick(){
        if(this.state.display==='block'){
            this.setState({
                display:'none'
            })

        }else{
            this.setState({
                display:'block'
            })
        }
    }
    onLogout(){
        auth.logout(()=>{
            this.props.history.push(`/homepage/login`)
        })
    }
    addData(username){
        axios.get(`http://localhost:5000/get/${username}`).then(res=>{
            this.setStateData(res.data);
        })
    }
    scrollToBottom = () => {
        animateScroll.scrollToBottom({
            containerId: "Messages"
          });
    }
    render(){
        return(
            <div className="chat_container">
                <div className="user_stuff">
                    <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg">
                        <Navbar.Brand>Chatroom Users</Navbar.Brand>
                    </Navbar>
                    <ActiveUsers onClick={this.addData}/>
                </div>
                <div className="messages_stuff">
                    <MessagesNavbar onClick={this.onClick} onLogout={this.onLogout}/>
                    <div className="messages_container">
                        <Profile display={this.state.display} data={this.state.data} />
                        <Messages loggedin_user={this.state.loggedin_user} messages={this.state.messages}/>
                        <div className="send_message">
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group>
                                <input id="message_input" type="text" placeholder="Type your message here" onChange={this.onChangeMessage} value={this.state.message}/>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

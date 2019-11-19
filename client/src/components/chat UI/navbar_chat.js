import React from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap'

const ChatNavbar = (props)=>{
    const {onClick,onLogout} = props
    return(
        <Navbar bg="dark" variant="dark" className="navbar-expand-lg">
            <Navbar.Brand className='center'>Messages</Navbar.Brand>
            <Nav className="mr-auto ">
            </Nav>
            <Nav className="nav navbar-nav navbar-right">
                <Button className="show_hide" variant="primary" type="button" size="md" onClick={onClick}>
                    Profile
                </Button>
                <Button className="logout" variant="primary" type="button" size="md" onClick={onLogout}>
                    Logout
                </Button>
            </Nav>
        </Navbar>
    )
}
export default ChatNavbar;

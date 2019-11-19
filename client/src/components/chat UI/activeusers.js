import React,{Component} from 'react'
import axios from 'axios'
import '../../css/active_users.css'

class Activeusers extends Component{
    constructor(props){
        super(props)

        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/get/').then(res=>{
            console.log(res.data)
            this.setState({
                data:res.data
            })
        })
    }

    render(){
        const data=this.state.data
        
        const users = data.map((users)=>{
            return(
                <div className='user_container' key={users._id} onClick={()=>{this.props.onClick(users.username)}}>
                    <span className="user_name">{users.firstname} {users.lastname}</span><br/>
                    <span className="user_job">{users.job}</span>
                </div>
            )
        })
        return(
            <div className="active_users">
            {users}
            </div>
        )
    }
}
export default Activeusers;
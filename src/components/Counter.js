import React from 'react';

import axios from 'axios';

class Counter extends React.Component{
  state={
    users:[]
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>{this.setState({users:res.data})})
  }
render(){
 let user = this.state.users.map(user=><li key={user.id}>{user.name}</li>)
 return(
   <ul>
    {user}
   </ul>
 )
}
}

export default Counter;
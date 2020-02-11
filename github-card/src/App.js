import React from 'react';
import Card from './components/card'
// import Followers from './followers'
import axios from 'axios'
import './App.css';

class App extends React.Component{

  constructor(){
    super()
      this.state={
        name: '',
        email:'',
        login:'',
        avatar:'',
        url: '',
        followers: '',
        people:[]
      
    }
  }//closes constructor

  componentDidMount(){
    axios.get('https://api.github.com/users/Draxxus702')
    .then(res =>{
      
      this.setState({
        avatar: res.data.avatar_url,
        name: res.data.name,
        bio: res.data.bio,
        login: res.data.login,
        followers: res.data.followers,
        url: res.data.html_url
      })
    })//closes first axios
    
    axios.get('https://api.github.com/users/Draxxus702/followers')
    .then(response =>{
      
      this.setState({
        people: response.data
      })
    })//closes second axios
    
  }//closes compenentDidMount


  render(){
  return (
    <div className="App">
      <header>
      <h1>My GitHub Page</h1>
      </header>
      <div className='top'>
      <Card 
      name={this.state.name}
      avatar={this.state.avatar}
      bio={this.state.bio}
      login={this.state.login}
      followers={this.state.followers}
      url={this.state.url}
      />
      </div>
      <h3>My Followers</h3>
      <div className='followers'>
        
      {this.state.people.map(followme =>{
        return(
          <div className='persons'
          key={followme.id}>
            <img src ={followme.avatar_url}/>
            <div className='followerInfo'>
              <p>{followme.login}</p>
              <p>Follow Me:</p> <a href={followme.html_url} target='_blank'>{followme.html_url}</a>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}
}

export default App;

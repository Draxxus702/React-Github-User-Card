import React from 'react'



function Card(props){
    
return(
<div className='card'>
<img src={props.avatar} alt='My Face'/>
<p>{props.name}</p>
<p>{props.login}</p>
<p>{props.email}</p>
<p>{props.bio}</p>
<a href={props.url} target='_blank'>{props.url}</a>
<p>Followers: {props.followers}</p>
</div>
 )
}


export default Card
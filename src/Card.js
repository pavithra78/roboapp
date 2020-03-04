import React, { Component } from 'react'

const Card =(props) => {
    return (
   
  <div className='tc bg-light-green dib br3 mr2 grow'>
   
    
        <img alt="photo" src={`https://robohash.org/${props.id}?200x200`}/>
        <div>
            <h2>{props.id}</h2>
            <p>{props.name}</p>
            <p>{props.email}</p>
  
  </div>
</div>

    
    );
}
export  default Card

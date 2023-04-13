import React from 'react'

const Props = (props) => {
  return (
    <div>
        
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>City:{props.city}</p>
        <img src={props.src}  alt='img' style={{width:"150px"}}/>
        {props.children}

    </div>
  )
}

export default Props



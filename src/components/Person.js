import React from 'react'
import './Person.css'
const Person = () => {
  let luckyNumber=7;
  let randomNumber=Math.floor(Math.random()*10);
  return (
    < div  style={{color:"red",padding:"20px"}} className='person'>
        {(randomNumber==luckyNumber)?
        <div>
          <p>Name: Harsh Sharma</p>
        <p>Age:26</p>
        <p>Location: Mathura</p>
        <img src='https://media.tenor.com/images/2314a68e24a91e60c4cd9eed4981dd58/raw' alt='' style={{width:"150px"}}/>
        <p>My number is: {randomNumber}</p>
        </div>: <p>You didn't win 😢</p>}
    </div>
  )
}   

export default Person
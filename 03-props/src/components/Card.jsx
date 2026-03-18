import React from 'react'

const Card = (props) => {
    /* console.log(props)  */
    /*  console.log(props.user) */
    /* console.log(props.Age) */
    /* console.log(props.user, props.Age) */
  return (
        <div className='parent'>
           <div className="card">
              {/* <img src="https://plus.unsplash.com
              /premium_photo-1710787193365-cbc78234
              4920?q=80&w=1170&auto=format&fit=crop&i
              xlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1
              wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

              <img src={props.img}  />
              <h1>I am {props.user},{props.Age} </h1><br />
              <p>I am Software developer. I have 3yesars of experience in React.</p>
              <button>View Profile</button>
            </div>
        </div>
   
  )
}

export default Card

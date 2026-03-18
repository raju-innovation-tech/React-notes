/* import React from "react"; */
import { Bookmark } from "lucide-react";


const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
        <div className="top">
          
          <img src={props.brandLogo}  />
          <button>save <Bookmark size={12} /></button>
        </div>
        <div className="center">
          <div>
            <h3>{props.companyName} <span>{props.postedDate}</span></h3>
            <h2>{props.role}</h2>
            <div className='tag'>
               <h4>{props.jobType}</h4>
              <h4>{props.jobLabel} </h4>
             </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pricePerHour}</h3>
             <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
        
      </div>
  )
}

export default Card

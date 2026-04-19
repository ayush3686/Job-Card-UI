import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
            <img src={props.logo} alt="" />
            <button>Save <Bookmark/> </button>
        </div>
        <div className="center">
            <h3>{props.company} <span>{props.span}</span></h3>
            <h2>{props.post}</h2>
            <div className='center2'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
        </div>
        <div className="bottom">
          <div className='bottom2'>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card

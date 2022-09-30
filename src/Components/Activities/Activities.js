import React from 'react';
import './Activities.css'

const Activities = ({routine,hanldleAddToList }) => {
    console.log(routine)
    const {name,img,body,duration}=routine;

    return (
        <div className='activities'>
           
            <img src={img} alt="" ></img>
           <div className='activities-info'>
             <p className='activities-name'>{name}</p>
                <p>{body}</p>
                <p><small>Time duration:{duration}</small></p>
           </div>
            {/* <button onClick={()=> hanldleAddToList(routine)} className='btn-add'>
                <p  className='btn-tetx'> Add To List</p>
            </button> */}
            <button className='btn-add'>
                <p  className='btn-tetx'> Add To List</p>
            </button>
        </div>
    );
};

export default Activities;
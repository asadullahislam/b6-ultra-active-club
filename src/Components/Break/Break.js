// import React, { useState } from 'react';
// import Routine from '../Routine/Routine';
// import asad from '../../../public/images/asad.JPG'
import './Break.css'

const Break = () => {

    // const [breakTime, setBreakT ime]=useState([]);
    // let currentBreakTime
    const handleBreakClick=()=>{
        console.log('hi');
    }
 
    return (
        <div className='cart' >
            <div className='name-container'>
                {/* <img src={asad} alt="" /> */}
                <p>hello</p>
                <div>
                    <p>Md.Asadullah</p>
                    <p><small>Dhaka,Bangladesh</small></p>
                </div>
            </div>
            <div className='body-structure'>
                <div>
                    <p><span className='weight-height-age'>75</span>kg <br />Weight</p>
                   
                </div>
                <div>
                    <p><span className='weight-height-age'>6.25</span>ft
                    <br />Height</p>
                    
                </div>
                <div>
                    <p><span className='weight-height-age'>25</span>years <br />Age</p>
                   
                </div>
            </div>

            <h3>Add a Break</h3>

            <div className='total-break'>
                <p className='break-time'><span onClick={handleBreakClick} >10</span>m</p>
                <p className='break-time'><span>20</span>m</p>
                <p className='break-time'><span>30</span>m</p>
                <p className='break-time'><span>40</span>m</p>
                <p className='break-time'><span>50</span>m</p>
            </div>
            <h3> Duration Details</h3>
            <div>
                <h5 className='time-spent'>Time Spent:</h5>
            </div>
            <div>
                <h5 className='time-spent'>Break Time:</h5>
            </div>
            <button className='btn'>
                <p className='btn-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Break;
import React, { useState } from 'react';
// import Routine from '../Routine/Routine';
// import asad from  '../../../public/images/asad.JPG'


import './Cart.css';

import React from 'react';

const cart = ({ cart }) => {


    let time = 0;
    const pTime = localStorage.getItem('btime');
    if (pTime) {
        time = pTime;
    }
    const [breaktime, setBreaktime] = useState(time);



    let total = 0;
    for (const routine of cart) {
        total = total + routine.duration;
    }

    const addToBreakTime = (breakTime) => {
        setBreaktime(breakTime)
        localStorage.setItem('btime', breakTime)


    }
    return (
        <div>
            < div className='name-container' >
                <img className='my-img' src="images/asad.jpg" alt="" />
                < div >
                    <p>Md.Asadullah</p>
                    <p > <small >Dhaka,Bangladesh</small></p>
                </div >
            </div >
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

            <div classNameclassName='total-break'>
                <button onClick={() => addToBreakTime(10)} className='break-time'>10m</button>
                <button onClick={() => addToBreakTime(20)} className='break-time'>20m</button>
                <button onClick={() => addToBreakTime(30)} className='break-time'>30m</button>
                <button onClick={() => addToBreakTime(40)} className='break-time'>40m</button>
                <button onClick={() => addToBreakTime(50)} className='break-time'>50m</button>

            </div>

            <h3> Duration Details</h3>

            <div>
                <h5 className='time-spent'>Time Spent: {total} Minute</h5>
            </div>
            <div>
                <h5 className='time-spent'>Break Time:{breaktime}  Minute</h5>
            </div>
            <button className='btn'>
                <p className='btn-text'>Activity Completed</p>
            </button>


        </div>
    );
};

export default Cart;





 





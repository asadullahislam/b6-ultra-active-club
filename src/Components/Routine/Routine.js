import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Break from '../Break/Break';

import './Routine.css'

const Routine = () => {
const[routines,setRoutines]=useState([]);
// const [list, setList]=useState([]);

useEffect(()=>{
    fetch('routines.json')
    .then(res=>res.json()) 
    .then(data=>setRoutines(data))

},[])

const handleToClick =(routine)=>{

}

    return (
        <div className='container'>
            <h4 >Today My Routine</h4>
            <div className='routine-container'>
                <div className='routine-div'>
                  
                    {
                     routines.map(routine=><Activities
                         key ={routine.id}
                         routine ={routine}
                        //  hanldleAddToList  ={hanldleAddToList }
                    
                     ></Activities>)
                     }
                </div>
                <div className='break-container'>
                <Break></Break>

                </div>
            </div>
        </div>
    );
};

export default Routine;
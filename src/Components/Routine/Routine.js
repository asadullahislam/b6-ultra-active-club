import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';

import './Routine.css';

const Routine = () => {
    const [routines, setRoutines] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('routines.json')
            .then(res => res.json())
            .then(data => setRoutines(data))

    }, [])

    const handleAddToCart = (routine) => {

        const newCart = [...cart, routine]
        setCart(newCart);

    }



    return (
        <div className='container'>
            <h4 >Today My Routine</h4>
            <div className='routine-container'>
                <div className='routine-div'>

                    {
                        routines.map(routine => <Activities
                            key={routine.id}
                            routine={routine}
                            handleAddToCart={handleAddToCart}


                        ></Activities>)
                    }
                </div>
                <div className='break-container'>
                    <Cart cart={cart}


                    ></Cart>

                </div>
            </div>
        </div>
    );
};

export default Routine;
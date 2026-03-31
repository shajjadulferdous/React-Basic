import React, { use } from 'react';
import ModelCart from './ModelCart';

const Model = ({cartPromise}) => {
    const carts = use(cartPromise);
    console.log(carts)
    return (
        <div className='w-12/16 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10'>
            {
                carts.map((cart) => <ModelCart key={cart.id} cart={cart} ></ModelCart>)
            }
        </div>
    );
};

export default Model;
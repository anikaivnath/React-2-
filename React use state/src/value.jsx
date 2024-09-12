
import { useState } from 'react';

const Value = ()=> {
const[ value,setValue]=useState(10);

const increase =()=>{
  setValue(value+1)
};
const decrease =()=>{
  setValue(value-1)
};


return (
    <>
    <div className=''>
    <button onClick={increase}>Increase+1</button>
    <button onClick={decrease}>Decrease -1</button>
    <p>Value is {value}</p>

    </div>

    </>
  );


}

export default Value;

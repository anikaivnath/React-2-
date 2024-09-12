
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
    <div className='text-slate-50 text-center '>
    <button onClick={increase}  className='bg-red-800 white m-5 px  p-3 rounded-lg'>Increase+1</button>
    <button onClick={decrease} className='bg-red-800 p-3 rounded-lg'>Decrease -1</button>
    <p className='text-zinc-950 text-center'>Value is {value}</p>

    </div>

    </>
  );


}

export default Value;

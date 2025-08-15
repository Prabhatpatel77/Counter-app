import React,{useState} from 'react';

export default function Counter(){
const [count,setCount]=useState(0);


const incHandler=(e)=>{
    setCount(count+1)
}
const decHandler=()=>{
    setCount(count-1);
}
    return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {count} </p>
            <button type='button'
            onClick={incHandler}>Increment</button>
            <button
            type='button'
            onClick={decHandler}
            >decrement</button>
        </div>
    )
}
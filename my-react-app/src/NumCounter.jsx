import React, {useState} from 'react'

function NumCounter(){

    const [number, setNumber] = useState(0);

    function incNum(){
        setNumber(n => number + 1);
        setNumber(n => number + 1);
    }

    function decNum(){
        setNumber(number - 1);
    }

    function resNum(){
        setNumber(0);
    }
    return(
        <div>
            <p>Number: {number}</p>
            <button onClick={incNum}>Increment by 1</button>
            <button onClick={decNum}>Decrement by 1</button>
            <button onClick={resNum}>Reset to 0</button>
        </div>
    );
}

export default NumCounter
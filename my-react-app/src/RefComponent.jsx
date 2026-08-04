import React, {useState, useEffect, useRef} from "react"

function RefComponent(){

    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);

    useEffect(() => {
        console.log("Component Rendered");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor ="aqua";
        inputRef2.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor ="aqua";
        inputRef1.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor ="aqua";
        inputRef2.current.style.backgroundColor ="";
        inputRef1.current.style.backgroundColor ="";
    }

    return(
        <div>
            <button onClick={handleClick1}>Click Meeeee 1</button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>Click Meeeee 2</button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>Click Meeeee 3</button>
            <input ref={inputRef3} />
        </div>
    );
}

export default RefComponent
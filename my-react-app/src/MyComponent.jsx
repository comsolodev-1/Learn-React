import React, {useState} from 'react';

function MyComponent(){
    let [name, setName] = useState("random");
    let [age, setAge] = useState(0);

    const updateName = () => {
        setName("soloDev");
    };

    const incrementAge = () => {
        setAge(age++);
    };

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>increment age</button>
        </div>
    );

}

export default MyComponent
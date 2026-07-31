import React, {useState} from "react"

function UpdateArray(){

    const [car, setCar] = useState({year: 2000, maker: "Ford", model: "Mustang"});

    function handleYear(event){
        setCar(cr => ({...cr, year: event.target.value}));
    }

    function handleMaker(event){
        setCar(cr => ({...cr, maker: event.target.value}));
    }

    function handleModel(event){
        setCar(cr => ({...cr, model: event.target.value}));
    }

    return(
        <div>
            <p>My car is {car.model} from {car.maker} in year {car.year}</p>
            <input type="text" value={car.year} onChange={handleYear}/>
            <input type="text" value={car.maker} onChange={handleMaker}/>
            <input type="text" value={car.model} onChange={handleModel}/>
        </div>
    );
}
export default UpdateArray
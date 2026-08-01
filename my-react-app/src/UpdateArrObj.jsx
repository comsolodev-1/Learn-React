import React, {useState} from 'react';

function UpdateArrObj(){

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [maker, setMaker] = useState("");
    const [model, setModel] = useState("");

    function addCar(){
        const newCar = {year: year, maker: maker, model: model};

        setCars(c => [...c, newCar]);
    }

    function removeCar(){
        setCars(c => c.slice(0, -1))
    }

    function handleYear(event){
        setYear(event.target.value);
    }

    function handleMaker(event){
        setMaker(event.target.value);
    }

    function handleModel(event){
        setModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => <li key={index}>{car.year} {car.maker} {car.model}</li>)}
            </ul>
            <input type="Date.year" value={year} onChange={handleYear}/> <br/>
            <input type="text" value={maker} onChange={handleMaker} placeholder="Enter car maker"/> <br/>
            <input type="text" value={model} onChange={handleModel} placeholder="Enter car model"/> <br/>
            <button onClick={addCar}>Add car</button> <br/>
            <button onClick={removeCar}>Remove Last car</button>
        </div>
    );
}
export default UpdateArrObj
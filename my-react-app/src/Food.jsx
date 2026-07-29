function Food(){

    const myFood = "Pizza";
    const notMyFood = "NotPizza";

    return(
        <ul>
            <li>BBQ</li>
            <li>{myFood}</li>
            <li>{notMyFood}</li>
            <li>NotBBQ</li>
        </ul>
    );
}

export default Food
function Button(){

    let count = 0;

    const clickHandler = (e) => {
        if (count % 2 == 0) {
            count++; 
            e.target.style.color = "black"
        } else {
            count++;
            e.target.style.color = "white"
        }
    };


    return(
        <button id="button" onClick={clickHandler}>Click Me!</button>
    );
}

export default Button
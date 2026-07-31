import React, {useState} from 'react';

function MyNewComponent(){
    const [name, setName] = useState("random");
    const [comment, setComment] = useState("");
    const [choice, setChoice] = useState("");
    const [radioVal, setRadio] = useState("");

    function handleName(event){
        setName(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value)
    }

    function handleChoice(event){
        setChoice(event.target.value);
    }

    function handleRadio(event){
        setRadio(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleName}/>
            <p>Name: {name}</p>

            <textarea value={comment} onChange={handleComment} placeholder='write a comment'></textarea>
            <p>Comment: {comment}</p>

            <select value={choice} onChange={handleChoice}>
                <option value="">Select an option</option>
                <option value="first choice">first choice</option>
                <option value="second choice">second choice</option>
                <option value="third choice">third choice</option>
            </select>
            <p>Choice: {choice}</p>

            <label>
                <input type="radio" value={"radio1"} checked={radioVal === "radio1"} onChange={handleRadio}/>
                radio1
            </label>
            <label>
                <input type="radio" value={"radio2"} checked={radioVal === "radio2"} onChange={handleRadio}/>
                radio2
            </label>
            <p>Radio value: {radioVal}</p>
        </div>
    );
}
export default MyNewComponent
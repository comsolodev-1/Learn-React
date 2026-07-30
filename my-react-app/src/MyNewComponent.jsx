import React, {useState} from 'react';

function MyNewComponent(){
    const [name, setName] = useState("random");
    const [comment, setComment] = useState("");
    const [choice, setChoice] = useState("");
    const [radio, setRadio] = useState("");

    function handleName(event){
        setName(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleName}/>
            <p>Name: {name}</p>

            <textarea value={comment} onChange={handleComment}></textarea>
            <p>Comment: {comment}</p>
        </div>
    );
}
export default MyNewComponent
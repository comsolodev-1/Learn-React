import React, {useState} from 'react'

function UpdateList(){
    const [lang, setLang] = useState(["java","cpp","c#"]);

    function addLang(event){
        const newLang = document.getElementById("langInput").value;
        document.getElementById("langInput").value = "";

        setLang(l => [...l, newLang]);
    }

   function removeLang() {
        setLang(l => l.slice(0, -1));
    }

    return(
        <div>
            <h2>Languages</h2>
            <ul>
                {lang.map((lang, index) => <li key={index}>{lang}</li>)}
            </ul>
            <input type="text" id="langInput" placeholder="Enter new lang"/>
            <button onClick={addLang}>Add Language</button>
            <br/>
            <button onClick={removeLang}>Remove Last Language</button>
        </div>
    );
}
export default UpdateList
import React, {useState} from 'react'

function Todo(){

    const [tasks, setTasks] = useState(["Learn React", "Learn NextJS", "Land a Job"]);
    const [newTask, setNewTask]= useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function removeTask(index){
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    }

    function moveTaskUp(index){
        if (index > 0){
            const updated = [...tasks];
            [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
            setTasks(updated);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length -1){
            const updated = [...tasks];
            [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
            setTasks(updated);
        }
    }

    return(
        <div className="todo-list">
            <h1>Todo List</h1>

            <div>
                <input className="input-todo" type="text" value={newTask} placeholder="Enter a task" onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add Task</button>
                <ol className="todo-ol">
                    {tasks.map((task, index) => <li key={index}><span className="text">{task}</span> 
                        <button className="remove-button" onClick={() => removeTask(index)}>Remove Task</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Move Task Up</button>
                        <button className="move-button" onClick={() =>moveTaskDown(index)}>Move Task Down</button>  
                          
                    </li>)}
                </ol>
            </div>
        </div>
    );
}

export default Todo
function Student(props){
    return(
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>is-a.dev: {props.isDev ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student
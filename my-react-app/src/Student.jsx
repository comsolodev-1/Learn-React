import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>is-a.dev: {props.isDev ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isDev: PropTypes.bool
}

export default Student
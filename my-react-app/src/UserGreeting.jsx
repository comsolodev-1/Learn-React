import PropTypes from "prop-types";

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome, {props.username}</h2>;
    const loginLabel = <h2 className="login-label">Please Login to Continue!</h2>;

    return(props.isLoggedIn ? welcomeMessage : loginLabel);
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

export default UserGreeting
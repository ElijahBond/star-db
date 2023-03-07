

const LogingPage = ({ isLoggedIn, onLogin}) => {
    return (
        <div className="jumbotron">
            <p>Login to access secret page</p>
            <button 
                className="btn btn-primary"
                onClick={onLogin}>
                I want to see secret page
            </button>
        </div>
    )
}

export default LogingPage;
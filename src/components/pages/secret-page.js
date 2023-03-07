const SecretPage = ({isLoggedIn}) => {

    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h2>I told you, there are no secrets here</h2>
            </div>
        )
    }

    return <p>Go away, there are no secrets here =)</p>
}

export default SecretPage;
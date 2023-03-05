import './errorIndicator.css';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img
                style={{width : '60px'}}
                src='https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/death-star-icon-14-256.png'
                alt='error message' />
            <span className='boom'>Boom!</span>
            <span>
                something wrong
            </span>
            <span>
                "Мау the force be with you"
            </span>
            <span>
                (we already fixing it)
            </span>
        </div>
    )
}

export default ErrorIndicator;
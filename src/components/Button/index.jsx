import './styles.css'

const Button = (props) => {
    return (
        <button className='button' onClick={props.changeId}>
            {props.children}
        </button>
    )
}

export default Button;
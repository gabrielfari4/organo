import './Input.css'

const Input = (props) => {
    return (
        <div className="input">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;
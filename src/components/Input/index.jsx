import './Input.css'

const Input = (props) => {
    return (
        <div className="input">
            <label>{props.label}</label>
            <input required={props.mandatory} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;
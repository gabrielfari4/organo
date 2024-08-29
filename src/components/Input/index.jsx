import './styles.css'

const Input = (props) => {

    const onType = (e) => {
        props.onChanged(e.target.value)
    }

    return (
        <div className="input">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.mandatory} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;
import './styles.css'

const Input = ({ type = 'text', label, value, onChanged, mandatory, placeholder }) => {

    const onType = (e) => {
        onChanged(e.target.value)
    }

    return (
        <div className={`input input-${type}`}>
            <label>{label}</label>
            <input 
            value={value} 
            onChange={onType} 
            required={mandatory} 
            type={type} 
            placeholder={placeholder}/>
        </div>
    )
}

export default Input;
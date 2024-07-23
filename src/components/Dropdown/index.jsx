import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={e => props.onChanged(e.target.value)} required={props.mandatory} value={props.value}>
                <option className='option'  selected>Selecione um time</option>
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;
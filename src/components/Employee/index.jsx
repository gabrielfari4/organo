import './Employee.css'

const Employee = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
            <img src={props.image} alt={`Foto ${props.name}`} />
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Employee;
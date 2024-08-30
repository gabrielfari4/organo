import Employee from '../Employee';
import './styles.css'
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    return (
        props.employees.length > 0 && <section className='team' style={{ backgroundImage: 'url(../../../public/images/fundo.png)', backgroundColor: hexToRgba(props.primaryColor, '0.6') }}>
            <input value={props.primaryColor} type='color' className='input-color' onChange={event => {
              props.changeColor(event.target.value, props.name)
            }} /> 
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => {
                    return <Employee 
                        key={employee.name}
                        name={employee.name} 
                        role={employee.role}
                        image={employee.image}
                        primaryColor={props.primaryColor}
                        onDeleting={props.onDeleting}
                        />
                })}
            </div>
        </section>
    )
}

export default Team;
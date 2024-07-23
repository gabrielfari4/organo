import Employee from '../Employee';
import './Team.css'

const Team = (props) => {
    return (
        <section className='team' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            {props.employees.map(employee => {
                return <Employee />
            })}
        </section>
    )
}

export default Team;
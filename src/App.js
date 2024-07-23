import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '',
      secondaryColor: ''
    },
    {
      name: 'Front-end',
      primaryColor: '',
      secondaryColor: ''
    },
    {
      name: 'Data Science',
      primaryColor: '',
      secondaryColor: ''
    },
    {
      name: 'DevOps',
      primaryColor: '',
      secondaryColor: ''
    },
    {
      name: 'UX e Design',
      primaryColor: '',
      secondaryColor: ''
    },
    {
      name: 'Mobile',
      primaryColor: '',
      secondaryColor: ''
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '',
      secondaryColor: ''
    },
  ]

  const [employees, setEmployees] = useState([])

  const onSubmittedEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form onSubmittingEmployee={employee => onSubmittedEmployee(employee)}/>
      <Team name='Programação'/>
    </div>
  );
}

export default App;

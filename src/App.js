import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
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
      <Form onSubmittingEmployee={employee => onSubmittedEmployee(employee)} teams={teams}/>

      {teams.map(team => {
        return (
          <Team 
            name={team.name} primaryColor={team.primaryColor} 
            secondaryColor={team.secondaryColor} 
            key={team.name}
            employees={employees.filter(employee => employee.team === team.name)}
          />
        ) 
      })}
      
      <Footer />
    </div>
  );
}

export default App;

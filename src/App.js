import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      primaryColor: '#57c278',
      
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      
    },
  ])

  const [employees, setEmployees] = useState([])

  const onSubmittedEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  const deleteEmployee = () => {

  }

  const changeTeamColor = (color, name) => {
    setTeams(teams.map(team => {
      if (team.name === name) {
        team.primaryColor = color
      }
      return team
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form onSubmittingEmployee={employee => onSubmittedEmployee(employee)} teams={teams}/>

      {teams.map(team => {
        return (
          <Team 
            changeColor={changeTeamColor}
            name={team.name} 
            primaryColor={team.primaryColor} 
            secondaryColor={team.secondaryColor} 
            key={team.name}
            employees={employees.filter(employee => employee.team === team.name)}
            onDeleting={deleteEmployee}
          />
        ) 
      })}
      
      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      primaryColor: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Front-end',
      primaryColor: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      primaryColor: '#A6D157',
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      primaryColor: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      primaryColor: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
    },
  ])

  const [employees, setEmployees] = useState([])

  const onSubmittedEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const changeTeamColor = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.primaryColor = color
      }
      return team
    }))
  }

  const submitTeam = (newTeam) => {
    setTeams([ ...teams, { ...newTeam, id: uuidv4() } ])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        onSubmittingEmployee={employee => onSubmittedEmployee(employee)} 
        teams={teams}
        submitTeam={submitTeam}
      />

      {teams.map(team => {
        return (
          <Team 
            changeColor={changeTeamColor}
            name={team.name} 
            id={team.id} 
            primaryColor={team.primaryColor}
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

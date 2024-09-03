import { useEffect, useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import "./styles.css";
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [id, setId] = useState('')
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('')
   

    const onSave = (e) => {
        e.preventDefault()
        props.onSubmittingEmployee({
          name,
          role,
          image,
          team,
          id
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    useEffect(() => {
      setId(uuidv4())
    }, [name])

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input 
          mandatory={true} label="Nome" placeholder="Digite seu nome" 
          value={name}
          onChanged={value => setName(value)}
        />
        <Input 
          mandatory={true} label="Cargo" placeholder="Digite seu cargo" 
          value={role}
          onChanged={value => setRole(value)}
        />
        <Input 
          label="Imagem" placeholder="Informe o endereço da imagem" 
          value={image}
          onChanged={value => setImage(value)}
        />
        <Dropdown 
          mandatory={true} label='Time' 
          items={props.teams}
          value={team}
          onChanged={value => setTeam(value)}
        />
        <Button >
            Criar card
        </Button>
      </form>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.submitTeam({ name: teamName, primaryColor: teamColor })
      }
      }>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Input 
          mandatory 
          label="Nome" 
          placeholder="Digite o nome do time" 
          value={teamName}
          onChanged={value => setTeamName(value)}
        />
        <Input 
          mandatory={true} 
          type="color"
          label="Cor" 
          placeholder="Digite a cor do time" 
          value={teamColor}
          onChanged={value => setTeamColor(value)}
        />
        <Button >
            Criar novo time
        </Button>
      </form>
    </section>
  );
};

export default Form;

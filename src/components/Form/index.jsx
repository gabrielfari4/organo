import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import "./Form.css";

const Form = (props) => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (e) => {
        e.preventDefault()
        props.onSubmittingEmployee({
          name,
          role,
          image,
          team
        })
    }

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
          items={times}
          value={team}
          onChanged={value => setTeam(value)}
        />
        <Button>
            Criar card
        </Button>
      </form>
    </section>
  );
};

export default Form;

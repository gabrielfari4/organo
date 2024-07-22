import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import "./Form.css";

const Form = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (e) => {
        e.preventDefault()
        console.log('Form was submitted')
    }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input mandatory={true} label="Nome" placeholder="Digite seu nome" />
        <Input mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Informe o endereço da imagem" />
        <Dropdown mandatory={true} label='Time' items={times}/>
        <Button>
            Criar card
        </Button>
      </form>
    </section>
  );
};

export default Form;

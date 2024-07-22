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

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Informe o endereço da imagem" />
        <Dropdown label='Time' items={times}/>
      </form>
    </section>
  );
};

export default Form;

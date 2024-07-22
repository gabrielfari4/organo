import Input from "../Input";
import "./Form.css";

const Form = () => {
  return (
    <section>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;

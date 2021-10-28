import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const Questions = () => {
  const [isMultpleChoice, setIsMultpleChoice] = useState();

  const onChangeValue = (event) => {
    setIsMultpleChoice(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <div className="container">
      <h3>Adicionar Questão</h3>

      <InputGroup className="mb-3">
        <InputGroup.Text>Enunciado</InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>

      {isMultpleChoice && (
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Radio name="correctAnswer" />
            <FormControl />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Radio name="correctAnswer" />
            <FormControl />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Radio name="correctAnswer" />
            <FormControl />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Radio name="correctAnswer" />
            <FormControl />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Radio name="correctAnswer" />
            <FormControl />
          </InputGroup>
        </div>
      )}
      <button className="btn btn-primary btn-block">Salvar</button>
    </div>
  );
};

export default Questions;

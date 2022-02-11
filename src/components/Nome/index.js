import { useContext } from "react";

import { UserContext } from "../../contexts/user";

function Nome() {
  const { alunos, setAlunos } = useContext(UserContext)

  return (
    <div>
      <span style={{ color: '#FF0000' }} >Bem vindo: {alunos }</span>
      <br/>
        <button onClick={() => setAlunos('Elton Freitas')}>troca nome</button>
    </div>
  );
}

export default Nome;

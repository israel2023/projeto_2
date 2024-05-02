import { useState } from 'react';
import api from '../api';

function AlunoSearch() {
  const [alunoId, setAlunoId] = useState('');
  const [aluno, setAluno] = useState(null);
  const [error, setError] = useState(null);

  const handleAlunoIdChange = (event) => {
    setAlunoId(event.target.value);
  };

  const buscarAluno = () => {
    api.get(`alunos/${alunoId}`)
      .then(response => {
        setAluno(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Erro ao buscar aluno: ', error);
        setAluno(null);
        setError('Aluno não encontrado.');
      });
  };

  return (
    <div>
      <label htmlFor="alunoId">ID do Aluno:</label>
      <input
        type="text"
        id="alunoId"
        value={alunoId}
        onChange={handleAlunoIdChange}
      />
      <button onClick={buscarAluno}>Buscar</button>
      
      {error && <p>{error}</p>}
      
      {aluno && (
        <div>
          <h2>Detalhes do Aluno</h2>
          <p>Nome: {aluno.nome}</p>
          <p>RG: {aluno.rg}</p>
          <p>CPF: {aluno.cpf}</p>
          <p>Data de Nascimento: {aluno.dataNascimento}</p>
        </div>
      )}
    </div>
  );
}

export default AlunoSearch;

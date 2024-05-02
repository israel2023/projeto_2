import { useState } from 'react';
import api from '../api';

function DeletarAluno() {
  const [alunoId, setAlunoId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleAlunoIdChange = (event) => {
    setAlunoId(event.target.value);
  };

  const deletarAluno = async () => {
    try {
      await api.delete(`alunos/${alunoId}`);
      setMensagem('Aluno deletado com sucesso.');
      setAlunoId('');
    } catch (error) {
      console.error('Erro ao deletar aluno:', error);
      setMensagem('Erro ao deletar aluno. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Deletar Aluno</h1>
      <input
        type="text"
        placeholder="ID do Aluno"
        value={alunoId}
        onChange={handleAlunoIdChange}
      />
      <button onClick={deletarAluno}>Deletar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default DeletarAluno;

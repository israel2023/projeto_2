import { useState } from 'react';
import api from '../api';

function DeletarProfessor() {
  const [professorId, setProfessorId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleDeletar = async () => {
    try {
      await api.delete(`professores/${professorId}`);
      setMensagem('Professor deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar o professor:', error);
      setMensagem('Erro ao deletar o professor. Verifique se o ID está correto e tente novamente.');
    }
  };

  return (
    <div>
      <h1>Deletar Professor</h1>
      <input
        type="text"
        value={professorId}
        onChange={(e) => setProfessorId(e.target.value)}
        placeholder="ID do Professor"
      />
      <button onClick={handleDeletar}>Deletar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default DeletarProfessor;

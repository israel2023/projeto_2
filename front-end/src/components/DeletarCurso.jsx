import { useState } from 'react';
import api from '../api';

function DeletarCurso() {
  const [cursoId, setCursoId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCursoIdChange = (event) => {
    setCursoId(event.target.value);
  };

  const deletarCurso = async () => {
    try {
      const response = await api.delete(`cursos/${cursoId}`);
      if (response.status === 200) {
        setMensagem('Curso deletado com sucesso!');
      } else {
        throw new Error('Resposta não foi bem-sucedida');
      }
    } catch (error) {
      console.error('Erro ao deletar o curso:', error);
      setMensagem('Erro ao deletar o curso. Verifique se o ID está correto e tente novamente.');
    }
    setCursoId(''); 
  };

  return (
    <div>
      <h1>Deletar Curso</h1>
      <div>
        <label htmlFor="cursoId">ID do Curso:</label>
        <input
          type="text"
          id="cursoId"
          value={cursoId}
          onChange={handleCursoIdChange}
        />
        <button onClick={deletarCurso}>Deletar</button>
      </div>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default DeletarCurso;

import { useState } from 'react';
import api from '../api';

function BuscarProfessor() {
  const [professorId, setProfessorId] = useState('');
  const [professor, setProfessor] = useState(null);
  const [erro, setErro] = useState('');

  const handleBuscar = async () => {
    try {
      const response = await api.get(`professores/${professorId}`);
      setProfessor(response.data);
      setErro('');
    } catch (error) {
      console.error('Erro ao buscar o professor:', error);
      setProfessor(null);
      setErro('Professor não encontrado.');
    }
  };

  return (
    <div>
      <h1>Buscar Professor</h1>
      <input
        type="text"
        value={professorId}
        onChange={(e) => setProfessorId(e.target.value)}
        placeholder="ID do Professor"
      />
      <button onClick={handleBuscar}>Buscar</button>
      {erro && <p>{erro}</p>}
      {professor && (
        <div>
          <h2>Dados do Professor</h2>
          <p>Nome: {professor.nome}</p>
          <p>CPF: {professor.cpf}</p>
        </div>
      )}
    </div>
  );
}

export default BuscarProfessor;

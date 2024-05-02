import { useState } from 'react';
import api from '../api';

function CadastrarProfessor() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('professores/', { nome, cpf });
      setMensagem('Professor cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o professor:', error);
      setMensagem('Erro ao cadastrar o professor. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Cadastrar Professor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do Professor"
          required
        />
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF do Professor"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default CadastrarProfessor;

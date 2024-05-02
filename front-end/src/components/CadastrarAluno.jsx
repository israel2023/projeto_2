import { useState } from 'react';
import api from '../api';

function CadastrarAluno() {
  const [nome, setNome] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleRGChange = (event) => {
    setRG(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  };

  const cadastrar = async () => {
    try {
      const response = await api.post('alunos/', { nome, rg, cpf, dataNascimento });
      setError('');
      setSuccess('Aluno cadastrado com sucesso!');
      // Limpar os campos após cadastro bem sucedido
      setNome('');
      setRG('');
      setCpf('');
      setDataNascimento('');
    } catch (error) {
      setSuccess('');
      setError('Erro ao cadastrar o aluno. Tente novamente.');
      console.error('Erro ao cadastrar aluno:', error);
    }
  };

  return (
    <div>
      <h1>Cadastrar Aluno</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={handleNomeChange}
      />
      <label htmlFor="rg">RG:</label>
      <input
        type="text"
        id="rg"
        value={rg}
        onChange={handleRGChange}
      />
      <label htmlFor="cpf">CPF:</label>
      <input
        type="text"
        id="cpf"
        value={cpf}
        onChange={handleCpfChange}
      />
      <label htmlFor="dataNascimento">Data de Nascimento:</label>
      <input
        type="date"
        id="dataNascimento"
        value={dataNascimento}
        onChange={handleDataNascimentoChange}
      />
      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}

export default CadastrarAluno;

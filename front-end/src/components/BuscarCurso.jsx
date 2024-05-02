import { useState } from 'react';
import api from '../api';

function CriarCurso() {
  const [nomeCurso, setNomeCurso] = useState('');
  const [duracao, setDuracao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleNomeCursoChange = (event) => {
    setNomeCurso(event.target.value);
  };

  const handleDuracaoChange = (event) => {
    setDuracao(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const criarCurso = async () => {
    try {
      await api.post('cursos/', { nome: nomeCurso, duracao, descricao });
      setMensagem('Curso criado com sucesso!');
      setNomeCurso('');
      setDuracao('');
      setDescricao('');
    } catch (error) {
      console.error('Erro ao criar curso:', error);
      setMensagem('Erro ao criar curso. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Criar Curso</h1>
      <div>
        <label htmlFor="nomeCurso">Nome do Curso:</label>
        <input
          type="text"
          id="nomeCurso"
          value={nomeCurso}
          onChange={handleNomeCursoChange}
        />
      </div>
      <div>
        <label htmlFor="duracao">Duração (em horas):</label>
        <input
          type="number"
          id="duracao"
          value={duracao}
          onChange={handleDuracaoChange}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={handleDescricaoChange}
        />
      </div>
      <button onClick={criarCurso}>Criar Curso</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default CriarCurso;

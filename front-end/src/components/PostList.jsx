
import { useState, useEffect } from 'react';


import api from '../api';
import '../styler/PostList.css'

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get(`alunos/`) // Use a URL base da API concatenada com o endpoint específico
      .then(response => {
        setPosts(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar alunos: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {posts.map(aluno => (
          <li key={aluno.id}>
            <h2>{aluno.nome}</h2>
            <p>RG: {aluno.rg}</p>
            <p>CPF: {aluno.cpf}</p>
            <p>Data de Nascimento: {aluno.dataNascimento}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

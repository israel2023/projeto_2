
// Importa o hook useState do React para gerenciar o estado e o hook useNavigate do react-router-dom para navegação entre rotas
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import '../styler/Login.css'

function Login() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post(`api/token/`, { username, password })
      localStorage.setItem('token', response.data.access)
      navigate('alunos/')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  return (
    <div className="login-container"> {/* Adiciona uma classe ao contêiner */}
      <h1>Login</h1>
      {/* Formulário de login */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        {/* Botão de login */}
        <button type="submit" className="login-button">Entrar</button> {/* Adiciona uma classe ao botão */}
      </form>
    </div>
  )
}

export default Login

// Este código define um componente chamado AppRouter que representa as rotas da aplicação. Ele utiliza o Router do React Router para envolver a aplicação e fornecer a navegação baseada em rotas. As rotas são definidas dentro do componente Routes.

// Importa os componentes necessários do react-router-dom e os componentes da aplicação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import PostList from './components/PostList'
import AlunoSearch from './components/BuscarAluno'


// Define o componente AppRouter que contém as rotas da aplicação
function AppRouter() {
  return (
    // Define o componente Router para envolver a aplicação e fornecer navegação baseada em rotas
    <Router>
      {/* Define as rotas da aplicação */}
      <Routes>
        {/* Rota para a página de login (pública) */}
        <Route path="/" element={<Login />} />
        {/* Rotas protegidas que requerem autenticação */}
        <Route element={<PrivateRoute />}>
          <Route path='/alunos' element={<PostList/>}/>
          <Route path='/buscar-aluno' element={<AlunoSearch/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

// Exporta o componente AppRouter
export default AppRouter
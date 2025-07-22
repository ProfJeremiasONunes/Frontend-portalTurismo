// Importa React e o hook useState para controle de estado local no componente
import React, { useState } from "react";

// Importa o axios para fazer requisições HTTP
import axios from 'axios'

// Importa o hook useNavigate do React Router para redirecionamento após o login
import { useNavigate } from "react-router-dom";

// Define o componente funcional LoginForm
const LoginForm = () => {
  // Estados para armazenar os valores digitados pelo usuário
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  // Instancia o hook de navegação para redirecionar rotas após login
  const navigate = useNavigate();

  // Função executada ao submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    try {
      // Faz uma requisição POST para o endpoint de login do backend
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      // Captura os dados de resposta do servidor (usuário autenticado, token, etc)
      const userData = response.data;

      // Salva os dados do usuário no localStorage para manter o login
      localStorage.setItem("user", JSON.stringify(userData));

      // Alerta de sucesso e redirecionamento para a página inicial
      alert("usuario logado com sucesso!!");
      navigate("/");
    } catch (error) {
      // Verifica se o erro vem da resposta do servidor (ex: email/senha inválidos)
      if (error.response) {
        alert("Erro ao logar usuário: email ou senha incorretos");
      } else {
        // Caso o erro seja por falha na comunicação com o servidor
        alert("erro ao conectar ao servidor");
      }
    }
  };

  // JSX retornado pelo componente (formulário de login estilizado com Tailwind CSS)
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      {/* Título do formulário */}
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      {/* Início do formulário de login */}
      <form onSubmit={handleSubmit}>

        {/* Campo de entrada do e-mail */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            placeholder="Digite seu email"
          />
        </div>

        {/* Campo de entrada da senha */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            placeholder="Digite sua senha"
          />
        </div>

        {/* Botão de envio do formulário */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full mt-2"
        >
          Entrar
        </button>
      </form>

      {/* Link para redirecionamento caso o usuário não tenha cadastro */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Não tem conta?{' '}
        <a href="/register" className="text-green-600 hover:underline p-2">
          Cadastre-se
        </a>
      </p>
    </div>
  );
};

// Exporta o componente para uso em outras partes do projeto
export default LoginForm;

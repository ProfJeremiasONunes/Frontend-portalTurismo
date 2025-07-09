import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portalturismo-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password}) // confirme se backend espera "password" ou "senha"
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert('Erro: ' + errorData.message);
        return;
      }

      const user = await response.json();
      localStorage.setItem('user', JSON.stringify(user));
      alert('Login realizado com sucesso!');
      window.location.href = '/';
    } catch (error) {
      alert('Erro na requisição: ' + error.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            placeholder="Digite sua senha"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full mt-2"
        >
          Entrar
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Não tem conta?{' '}
        <a href="/register" className="text-green-600 hover:underline p-2">
          Cadastre-se
        </a>
      </p>
    </div>
  );
};

export default LoginForm;

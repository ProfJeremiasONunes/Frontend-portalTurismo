// Importa React e o hook useState para controle de estado
import React, { useState } from "react";

// Importa axios para fazer requisições HTTP ao backend
import axios from 'axios'

// Define o componente funcional RegisterForm
const RegisterForm = () => {
    // Define os estados que armazenam os valores dos campos do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');

    // Função acionada quando o formulário é enviado
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

        try {
            // Envia os dados para o endpoint de cadastro do backend
            const response = await axios.post("http://localhost:5000/api/users", {
                name: nome,
                email,
                password
            });

            // Exibe uma mensagem de sucesso com os dados retornados do backend
            alert("Usuário cadastrado com sucesso!!" + `nome: ${response.data.name} email: ${response.data.email}`);
            
            // Redireciona o usuário para a tela de login
            window.location.href = "/login";

        } catch (error) {
            // Trata diferentes tipos de erro: resposta do backend ou falha de conexão
            if (error.response) {
                alert("Erro ao cadastrar usuário");
            } else {
                alert("erro ao conectar ao servidor");
            }
        }
    };

    // JSX retornado pelo componente (formulário estilizado com Tailwind)
    return (
        <>
            {/* Container principal branco com sombras, cantos arredondados e largura limitada */}
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                
                {/* Título centralizado */}
                <h2 className="text-2xl font-semibold text-center mb-6 text-black">Cadastrar</h2>
                
                {/* Início do formulário */}
                <form onSubmit={handleSubmit}>

                    {/* Campo para entrada do nome */}
                    <div>
                        <label>Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} // Atualiza o estado nome
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu nome"
                        />
                    </div>

                    {/* Campo para entrada do e-mail */}
                    <div>
                        <label>E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado email
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu email"
                        />
                    </div>

                    {/* Campo para entrada da senha */}
                    <div>
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado password
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    {/* Botão de envio do formulário */}
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 px-6 py-2 
                        rounded-lg transition duration-300 w-full sm:w-full mt-2 text-black"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </>
    );
};

// Exporta o componente para que possa ser utilizado em outras partes da aplicação
export default RegisterForm;

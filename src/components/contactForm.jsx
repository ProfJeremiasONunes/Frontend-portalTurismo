// Importa o React e o hook useState, necessário para manipulação de estado no componente funcional
import React from "react";
import { useState } from "react";

// Importa uma imagem de fundo localizada na pasta de assets
import bg from "../assets/imagens/bg.png"

// Define o componente funcional ContactForm
const ContactForm = () => {

    // useState para armazenar os dados do formulário: nome, e-mail e mensagem
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Função chamada sempre que há uma mudança em algum campo do formulário
    // Atualiza o estado `formData` com o novo valor digitado pelo usuário
    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    };

    // Função chamada ao submeter o formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        try {
            // Envia os dados do formulário para o backend usando uma requisição POST via axios
            const response = await axios.post("https://backend-portalturismo-wko4.onrender.com/api/contacts", {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });

            // Exibe um alerta com sucesso e redireciona para a página inicial
            alert("menssagem cadastrada com sucesso!!" + `nome: ${formData.name} email: ${formData.email}`);
            window.location.href = "/";
        } catch (error) {
            // Trata diferentes tipos de erro (com ou sem resposta do servidor)
            if (error.response) {
                alert("Erro ao cadastrar usuário");
            } else {
                alert("erro ao conectar ao servidor");
            }
        }
    };

    return (
        <>
            {/* Container principal com imagem de fundo aplicada via estilo inline */}
            <div
                className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* Caixa branca com sombra, bordas arredondadas e responsividade */}
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg">
                    
                    {/* Título centralizado com estilo adaptativo */}
                    <h2 className="texr-x1 sm:text-2xl font-semibold mb-4 sm:md-6 text-center text-gray-800">
                        Entre em contato
                    </h2>

                    {/* Formulário com espaçamento entre campos */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        {/* Campo de Nome */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                                Nome
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                                placeholder="Digite seu nome"
                            />
                        </div>

                        {/* Campo de E-mail */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                                placeholder="Digite seu E-mail"
                            />
                        </div>

                        {/* Campo de Mensagem */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                                placeholder="Digite sua mensagem..."
                                rows="5"
                            />
                        </div>

                        {/* Botão de envio do formulário */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full"
                            >
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

// Exporta o componente para uso em outras partes da aplicação
export default ContactForm;

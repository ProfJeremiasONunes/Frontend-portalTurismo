// Importa a biblioteca React
import React from "react";

// Importa componentes reutilizáveis que compõem a página
import Navbar from "../components/navbar";    // Barra de navegação no topo da página
import Footer from "../components/footer";    // Rodapé da página com informações e links
import LoginForm from "../components/loginForm";  // Formulário de login com campos e botões

// Define o componente funcional LoginPage, que representa a página de login do site
const LoginPage = () => {

    return (
        <>
            {/* 
              Estrutura principal da página:
              - "flex flex-col": organiza os elementos verticalmente com Flexbox
              - "min-h-screen": garante que a altura mínima ocupe toda a tela
            */}
            <div className="flex flex-col min-h-screen">

                {/* Componente Navbar fixo no topo da página */}
                <Navbar />

                {/* 
                  Área central da página onde o formulário de login ficará.
                  - "flex-grow": faz essa área ocupar todo o espaço disponível entre navbar e footer
                  - "flex items-center justify-center": centraliza o formulário vertical e horizontalmente
                  - "bg-gray-50": fundo cinza claro para diferenciar a seção
                */}
                <div className="flex-grow flex items-center justify-center bg-gray-50">
                    {/* Componente do formulário de login */}
                    <LoginForm/>
                </div>

                {/* Componente Footer fixado no rodapé da página */}
                <Footer />
            </div>
        </>
    )
}

// Exporta o componente LoginPage para ser usado no roteamento ou em outras partes da aplicação
export default LoginPage;

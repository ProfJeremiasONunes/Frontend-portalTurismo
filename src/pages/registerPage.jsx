// Importa React para usar JSX e criar componentes
import React from "react";

// Importa componentes reutilizáveis da aplicação
import Navbar from "../components/navbar";       // Barra de navegação no topo da página
import Footer from "../components/footer";       // Rodapé da página
import bg from "../assets/imagens/bg.png";       // Imagem de fundo para o layout
import RegisterForm from "../components/registerForm"; // Formulário de cadastro (registro)

// Componente funcional que representa a página de registro
const RegisterPage = () => {
    return (
        <>
            {/* 
              Container principal da página:
              - flex flex-col: estrutura flexível em coluna para organizar os elementos verticalmente
              - min-h-screen: garante que o container tenha altura mínima igual à altura da tela
              - relative: para posicionamento relativo, útil se houver elementos posicionados dentro
              - h-[500px]: altura fixa de 500px para o container (pode limitar a altura, cuidado com responsividade)
              - bg-cover bg-center: a imagem de fundo cobre todo o espaço e é centralizada
              - items-center justify-center: centraliza horizontalmente e verticalmente o conteúdo flexível
              - style: define a imagem de fundo dinamicamente com base na importação "bg"
            */}
            <div
                className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center items-center justify-center"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* Componente Navbar fixado no topo */}
                <Navbar />

                {/* 
                  Área principal da página que contém o formulário de cadastro.
                  - flex-grow: faz esse container crescer e ocupar espaço disponível
                  - flex items-center justify-center: centraliza o formulário vertical e horizontalmente
                */}
                <div className="flex-grow flex items-center justify-center">
                    <RegisterForm />
                </div>

                {/* Componente Footer fixado na parte inferior */}
                <Footer />
            </div>
        </>
    );
}

// Exporta o componente para uso no roteamento da aplicação
export default RegisterPage;

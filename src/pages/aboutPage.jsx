// Importando a biblioteca principal React
import React from "react";

// Importando componentes reutilizáveis que compõem a página
import AboutHero from "../components/aboutHero"; // Seção visual de destaque com imagem e textos
import Footer from "../components/footer";       // Rodapé da página com informações e ícones sociais
import Navbar from "../components/navbar";       // Menu de navegação superior

// Importando imagem de fundo a ser usada no AboutHero
import bg from "../assets/imagens/bg.png";

// Componente funcional que representa a página "Sobre"
const AboutPage = () => {
    return (
        <>
            {/* 
              Estrutura principal da página:
              - flex flex-col: usa Flexbox em coluna para organizar os elementos verticalmente.
              - min-h-screen: garante que a altura mínima seja igual à da tela inteira.
              Isso ajuda a manter o rodapé na parte inferior mesmo com pouco conteúdo.
            */}
            <div className="flex flex-col min-h-screen">
                
                {/* Componente de navegação fixo no topo da página */}
                <Navbar/>

                {/* Seção de destaque "AboutHero" com imagem de fundo importada */}
                <div>
                    {/* A imagem é passada como prop Img para o componente AboutHero */}
                    <AboutHero Img={bg}/>
                </div>

                {/* Componente de rodapé no final da página */}
                <Footer/>
            </div>
        </>
    );
}

// Exporta o componente para ser usado no roteamento ou outros componentes da aplicação
export default AboutPage;

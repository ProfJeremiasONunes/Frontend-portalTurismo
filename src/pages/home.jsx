// Importa a biblioteca React
import React from "react";

// Importa componentes reutilizáveis usados na página inicial
import Footer from "../components/footer";   // Rodapé do site
import Hero from "../components/hero";       // Seção principal em destaque (banner)
import Navbar from "../components/navbar";   // Menu de navegação no topo

// Importa uma imagem de fundo para o componente Hero
import bg from '../assets/imagens/bg.png'

// Define o componente funcional "Home", que representa a página inicial
const Home = () => {
    return (
        <>
            {/* 
              Estrutura principal da página:
              - "flex flex-col": usa Flexbox em coluna (vertical)
              - "min-h-screen": garante altura mínima de 100% da tela, útil para rodapé fixo
            */}
            <div className="flex flex-col min-h-screen">

                {/* Componente de navegação no topo da página */}
                <Navbar/>

                <div>
                    {/* 
                      Componente Hero:
                      - Exibe uma imagem de fundo, título, parágrafo e botão
                      - Os dados são passados via props (propriedades)
                    */}
                    <Hero 
                        Background={bg}               // Imagem de fundo da seção
                        titulo="Nova serra Verde"      // Título principal
                        paragrafo="conheça nossa atrações" // Subtítulo ou chamada
                        rota="#"                        // Rota do botão (link)
                        botao="Saiba mais"              // Texto do botão
                    />
                    
                    {/* Espaço reservado para conteúdo adicional abaixo do Hero */}
                    <div>
                        {/* Conteúdo futuro pode ser adicionado aqui */}
                    </div>
                </div>

                {/* Rodapé da página com informações de contato, redes sociais, etc. */}
                <Footer />
            </div>
        </>
    )
}

// Exporta o componente Home para ser usado no roteamento ou em outros arquivos
export default Home;

// Importa o React para uso do JSX
import React from 'react';

// Define o componente funcional Hero que recebe props como parâmetros
const Hero = (props) => {
    return (
        // Container principal com altura fixa, imagem de fundo dinâmica, centralização de conteúdo e texto branco
        <div
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${props.Background})` }} // Define imagem de fundo com base em uma prop recebida
        >
            {/* Div vazia - pode ser removida caso não tenha propósito */}
            <div />

            {/* Conteúdo textual centralizado acima da imagem de fundo */}
            <div className="relative z-10 text-center p-4">
                
                {/* Título principal estilizado com responsividade e sombra para destacar no fundo */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.titulo}
                </h1>

                {/* Parágrafo de apoio com limite de largura e sombra para legibilidade */}
                <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.paragrafo}
                </p>

                {/* Botão com link dinâmico e animação de hover */}
                <a
                    href={props.rota}
                    className="bg-green-800 hover:bg-green-400 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                    {props.botao}
                </a>
            </div>
        </div>
    );
};

// Exporta o componente Hero para uso em outras partes da aplicação
export default Hero;

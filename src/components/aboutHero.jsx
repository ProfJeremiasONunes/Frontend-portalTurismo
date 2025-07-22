import React from 'react';

// Componente funcional AboutHero que recebe uma imagem como prop (props.Img)
const AboutHero = (props) => {
    return (
        <>
            {/* 
              Container principal com altura fixa e margem. 
              A imagem de fundo é aplicada dinamicamente via inline-style usando a prop Img.
              - bg-cover: cobre todo o espaço disponível com a imagem.
              - bg-center: centraliza a imagem.
              - h-[630px]: define altura fixa.
              - m-8: margem externa.
              - mt-16: margem superior extra para afastar de elementos acima.
            */}
            <div 
                className='bg-cover bg-center h-[630px] m-8 mt-16' 
                style={{ backgroundImage: `url(${props.Img})` }}
            >
                {/* 
                  Título centralizado com padding superior, texto branco, grande e em negrito.
                  Serve como o "título" principal da seção.
                */}
                <div className='text-center pt-8 text-4xl font-bold text-white'>
                    <h1>Minha experiência</h1>
                </div>

                {/* 
                  Parágrafo logo abaixo do título, com o mesmo estilo.
                  Pode ser usado como subtítulo ou introdução à seção.
                */}
                <div className='text-center pt-8 text-4xl font-bold text-white'>
                    <p>Minha história</p>
                </div>
            </div>
        </>
    );
};

// Exportação do componente para ser usado em outras partes da aplicação
export default AboutHero;

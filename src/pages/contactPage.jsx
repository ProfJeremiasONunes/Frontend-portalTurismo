// Importando a biblioteca principal React
import React from "react";

// Importando componentes reutilizáveis que compõem a página
import ContactForm from "../components/contactForm"; // Formulário de contato com campos e botão de envio
import Footer from "../components/footer";           // Rodapé com informações e redes sociais
import Navbar from "../components/navbar";           // Navegação principal do site (menu no topo)

// Componente funcional que representa a página de contato
const ContactPage = () => {
    return (
        <>
            {/* 
              Estrutura principal da página:
              - flex flex-col: usa Flexbox para organizar os elementos verticalmente.
              - min-h-screen: altura mínima da tela inteira para garantir que o rodapé fique no fim mesmo com pouco conteúdo.
            */}
            <div className="flex flex-col min-h-screen">
                
                {/* Componente de navegação no topo da página */}
                <Navbar />

                {/* Conteúdo principal da página: formulário de contato */}
                <div>
                    <ContactForm/>
                </div>

                {/* Componente de rodapé na parte inferior da página */}
                <Footer />
            </div>
        </>
    );
}

// Exportando o componente para ser utilizado no roteamento ou em outros arquivos
export default ContactPage;

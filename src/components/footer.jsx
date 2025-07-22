import React from "react";
// Importação dos ícones de redes sociais da biblioteca react-icons
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

// Componente funcional Footer
const Footer = () => {
  return (
    // Elemento de rodapé com fundo em degradê verde, espaçamento e sombra
    <footer className="w-full bg-gradient-to-r from-green-200 to-green-600 text-black py-4 px-4 shadow-lg mt-auto">

      {/* Container centralizado responsivo com alinhamento flexível */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Texto de direitos autorais, centralizado no mobile e à esquerda em telas maiores */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-black">
            Nova Serra Verde. Todos os direitos reservados &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Área dos ícones sociais com espaçamento e interação visual */}
        <div className="flex space-x-6 text-lg">

          {/* Cada link recebe uma label para acessibilidade (leitores de tela),
              e um efeito de hover com transição suave */}
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-green-300 transition-colors duration-200"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="WhatsApp"
            className="hover:text-green-300 transition-colors duration-200"
          >
            <FaWhatsapp />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-green-300 transition-colors duration-200"
          >
            <FaInstagram />
          </a>

        </div>
      </div>
    </footer>
  );
};

// Exportação do componente para uso em outras partes do projeto
export default Footer;

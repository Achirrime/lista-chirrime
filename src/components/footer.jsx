import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiWhatsappLogoBold, } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="bg-orange-50 mt-0">
    <div className="flex space-x-64 ml-80">
  
        <div className="mt-24 p-9">
          <h3 className="font-semibold mb-2">Lista dos estudantes</h3>
          
            <p><span>Adicionar</span></p>
            <p><span>Eliminar</span></p>
            <p><span>Dados</span></p>
            <p><span>Procurar</span></p>
          
        </div>

        

       
        <div className="mt-24 p-9" >
          <h3 className="font-semibold mb-2">Escreva-nos</h3> 
          <p className="flex"><span><FaEnvelope />Email</span> </p>
          <p> <span><PiWhatsappLogoBold/>Whatsapp</span></p>
           <p><span><FaXTwitter/>Twitter</span></p>
           <p><span><FaLinkedin/>Linkedln</span></p> 

      </div>
      <div className="mt-24 p-9">
        <p className="text-center mt-20">&copy; 2024. Todos os direitos reservados.</p>
      </div>

      </div>
   
  </footer>
);
};
export default Footer;
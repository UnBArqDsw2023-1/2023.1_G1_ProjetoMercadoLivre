import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer>
      <div className="direito">
        <p>
          <span>Como cuidamos da sua privacidade</span> - Copyright © 1999-
          {new Date().getFullYear()} Ebazar.com.br LTDA.
        </p>
      </div>
      <div className="esquerdo">
        <p>
          Protegido por reCAPTCHA - <b>Privacidade</b> - <b>Condições</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

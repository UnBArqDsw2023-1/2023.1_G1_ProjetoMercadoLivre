import React, { useState } from "react";
import profile from "../images/profile.svg";
import phone from "../images/phone.svg";
import arrow from "../images/arrow.svg";
import profile2 from "../images/profile2.png";
import "../App.css";

function Content() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  const handleContinue = () => {
    if (email === "login1@gmail.com") {
      setIsEmailValid(true);
      setEmailError(false);
    } else {
      setIsEmailValid(false);
      setEmailError(true);
    }
  };

  const handleLogin = () => {
    if (senha === "Teste@123") {
      alert("Logado com sucesso")
      window.location.reload();
    } else {
      setSenhaError(true);
    }
    
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
    setSenhaError(false);
  };


  return (
    <div className="loginContent">
      <div className="info">
        {isEmailValid ? (
          <h1>Digite sua senha</h1>
        ) : (
          <h1>Digite seu e-mail, telefone ou usuário do Mercado Livre</h1>
        )}

        {isEmailValid ? (
          <div className="emailLogado">
            <img src={profile2} alt="Profile" />
            <div>
              <p>{email}</p>
              <span>Trocar Conta</span>
            </div>
          </div>
        ) : null}

        <div className="divisor" />

        <p>Reportar um Problema</p>
        <div className="report">
          <button className="buttons">
            <img src={phone} alt="Phone" />
            Roubo ou perda de celular
            <img className="light" src={arrow} alt="Arrow" />
          </button>
          <div className="divisor" />
          <button className="buttons">
            <img src={profile} alt="Profile" />
            Roubo de conta
            <img className="light" src={arrow} alt="Arrow" />
          </button>
        </div>
        <span>Preciso de ajuda com outros temas</span>
      </div>
      <div className="login">
        {isEmailValid ? (
          <>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              required
              maxLength={100}
              value={senha}
              onChange={handleSenhaChange}
              className={senhaError ? "input-error" : ""}
            />
            {senhaError && (
              <p className="error-message">*Revise sua senha.</p>
            )}
            <div className="submit">
              <button className="buttonSubmit" onClick={handleLogin}>
                Iniciar sessão
              </button>
              <button className="buttonSubmit transparent">
                Esqueceu a sua senha?
              </button>
            </div>
          </>
        ) : (
          <>
            <label>E-mail, telefone ou usuário</label>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              required
              maxLength={100}
              value={email}
              onChange={handleEmailChange}
              className={emailError ? "input-error" : ""}
            />
            {emailError && (
              <p className="error-message">*Revise o seu e-mail ou usuário.</p>
            )}
            <div className="submit">
              <button className="buttonSubmit" onClick={handleContinue}>
                Continuar
              </button>
              <button className="buttonSubmit transparent">
                Criar conta
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
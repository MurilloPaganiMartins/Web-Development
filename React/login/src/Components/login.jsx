import React from "react";
import loginImg from "./logo.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Entrar</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <label>Entrar com uma conta pré-existente</label>
          <div className="form" id="loginScreen">
            <div className="form-group">
              <label htmlFor="username">Nome</label>
              <input type="text" name="username" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" placeholder="Sua senha" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Entrar
          </button>
        </div>
        <label className="orButton">ou</label>
      </div>
    );
  }
}

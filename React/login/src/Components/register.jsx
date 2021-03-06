import React from "react";
import loginImg from "./logo.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Cadastrar</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <label> Criar uma nova conta</label>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nome</label>
              <input type="text" name="username" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Seu email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="text" name="password" placeholder="Sua senha" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Cadastrar
          </button>
        </div>
      </div>
    );
  }
}

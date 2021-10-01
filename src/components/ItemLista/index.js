import React from "react";
export default class ItemLista extends React.Component {
  render() {
    const { id, caminhoFoto, nome, detalhe, aoExcluir } = this.props;
    return (
      <li className="contato-lista-item">
        <div
          className="contato-avatar"
          style={{ backgroundImage: `url(${caminhoFoto})` }}
        ></div>
        <div className="contato-detalhes">
          <p>{nome}</p>
          <p>{detalhe}</p>
        </div>
        <button
          className="contato-remover js-contato-remover"
          onClick={() => aoExcluir(id)}
        >
          Remover
        </button>
      </li>
    );
  }
}

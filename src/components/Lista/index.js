import React from "react";
import ItemLista from "../ItemLista";

export default class Lista extends React.Component {
  render() {
    const { itens, aoExcluir } = this.props;
    return (
      <ol className="contato-lista" id="contatoLista">
        {itens.map((it) => (
          <ItemLista
            key={it.id}
            id={it.id}
            caminhoFoto={it.caminhoFoto}
            nome={it.nome}
            detalhe={it.detalhe}
            aoExcluir={aoExcluir}
          />
        ))}
      </ol>
    );
  }
}

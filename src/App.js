import React from "react";
import Lista from "./components/Lista";
import { sequencia, personagensIniciais } from "./db";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personagens: personagensIniciais,
      filtro: "",
      exibirLista: true,
      caminhoFoto: "",
      nome: "",
      detalhe: "",
    };
  }
  excluirPersonagem = (id) => {
    this.setState({
      personagens: this.state.personagens.filter((it) => id !== it.id),
    });
  };
  render() {
    const { personagens, filtro, exibirLista, caminhoFoto, nome, detalhe } =
      this.state;
    return (
      <React.Fragment>
        {exibirLista ? (
          <div id="lista">
            <input
              type="text"
              className="buscar-contatos"
              value={filtro}
              onChange={(e) => {
                this.setState({
                  filtro: e.target.value,
                });
              }}
            />
            <button
              type="button"
              className="adicionar-contato"
              onClick={() => this.setState({ exibirLista: false })}
            ></button>
            <Lista
              itens={personagens.filter(
                (it) => it.nome.includes(filtro) || it.detalhe.includes(filtro)
              )}
              aoExcluir={this.excluirPersonagem}
            />
            ;
          </div>
        ) : (
          <div id="formulario">
            <button
              id="voltar"
              onClick={() => this.setState({ exibirLista: true })}
            >
              Voltar
            </button>
            <form>
              <label>Caminho da foto:</label>
              <input
                type="text"
                value={caminhoFoto}
                onChange={(e) => {
                  this.setState({
                    caminhoFoto: e.target.value,
                  });
                }}
              />
              <label for="nome">Nome:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => {
                  this.setState({
                    nome: e.target.value,
                  });
                }}
              />
              <label for="telefone">Telefone:</label>
              <input
                type="text"
                value={detalhe}
                onChange={(e) => {
                  this.setState({
                    detalhe: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                id="salvar"
                onClick={() =>
                  this.setState({
                    personagens: [
                      ...this.state.personagens,
                      {
                        id: sequencia(),
                        caminhoFoto,
                        nome,
                        detalhe,
                      },
                    ],
                    exibirLista: true,
                  })
                }
              >
                Salvar
              </button>
            </form>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;

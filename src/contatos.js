const buscarContatos = document.getElementById("buscarContatos");
const contatoLista = document.querySelector("#contatoLista");
const lista = document.querySelector("#lista");
const formulario = document.querySelector("#formulario");
const voltar = document.querySelector("#voltar");
const salvar = document.querySelector("#salvar");
const caminhoFoto = document.querySelector("#caminhoFoto");
const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");
const abrirFormularioContato = document.getElementById(
  "abrirFormularioContato"
);

function exibirFormulario() {
  formulario.classList.remove("nao-exibir");
  lista.classList.add("nao-exibir");
}

function exibirLista() {
  lista.classList.remove("nao-exibir");
  formulario.classList.add("nao-exibir");
}

function novaPersonagem(caminhoFoto, nome, telefone) {
  const li = document.createElement("li");
  li.classList.add("contato-lista-item");
  li.innerHTML = `<div
                    class="contato-avatar"
                    style="background-image: url(${caminhoFoto})"
                  ></div>
                  <div class="contato-detalhes">
                    <p>${nome}</p>
                    <p>${telefone}</p>
                  </div>
                  <button class="contato-remover js-contato-remover">Remover</button>`;
  return li;
}

(function configurarExibicaoFormulario() {
  abrirFormularioContato.addEventListener("click", exibirFormulario);
})();

(function configurarVoltar() {
  voltar.addEventListener("click", exibirLista);
})();

(function configurarSalvar() {
  salvar.addEventListener("click", () => {
    const li = novaPersonagem(caminhoFoto.value, nome.value, telefone.value);
    contatoLista.appendChild(li);
    configurarEventosRemocao();
    exibirLista();
  });
})();

(function configurarFiltragemContatos() {
  buscarContatos.addEventListener("keyup", () => {
    const filtro = buscarContatos.value.toUpperCase();
    const personagens = document.getElementsByClassName("contato-lista-item");
    Array.from(personagens).forEach((personagem) => {
      if (personagem.innerText.toUpperCase().includes(filtro)) {
        personagem.classList.remove("nao-exibir");
      } else {
        personagem.classList.add("nao-exibir");
      }
    });
  });
})();

function configurarEventosRemocao() {
  const botoesRemocao = document.querySelectorAll(".js-contato-remover");
  Array.from(botoesRemocao).forEach((botao) => {
    botao.addEventListener("click", (evento) => {
      evento.target.parentNode.remove();
    });
  });
}

configurarEventosRemocao();

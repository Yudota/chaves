function criarSequencia() {
  let i = 1;
  return () => {
    return i++;
  };
}

export const sequencia = criarSequencia();

export const personagensIniciais = [
  {
    id: sequencia(),
    caminhoFoto: "./fotos/chaves.jpg",
    nome: "Chaves",
    detalhe: "+52 9876-1110",
  },
  {
    id: sequencia(),
    caminhoFoto: "./fotos/chiquinha.jpg",
    nome: "Chiquinha",
    detalhe: "+52 9876-1111",
  },
  {
    id: sequencia(),
    caminhoFoto: "./fotos/florinda.jpg",
    nome: "Dona Florinda",
    detalhe: "+52 9876-1112",
  },
  {
    id: sequencia(),
    caminhoFoto: "./fotos/quico.jpg",
    nome: "Quico",
    detalhe: "+52 9876-1113",
  },
  {
    id: sequencia(),
    caminhoFoto: "./fotos/barriga.jpg",
    nome: "Barriga",
    detalhe: "+52 9876-1114",
  },
  {
    id: sequencia(),
    caminhoFoto: "./fotos/madruga.jpg",
    nome: "Madruga",
    detalhe: "+52 9876-1115",
  },
];

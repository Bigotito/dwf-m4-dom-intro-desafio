const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  let elementosDeLista = document.querySelectorAll('.lista li');
  elementosDeLista.forEach((elemento) => {
    elemento.remove();
  })

  let listaSup = document.querySelector('.lista');

  let nuevoLi;
  cosasQueAprendimos.forEach((temaActual) => {
    nuevoLi = document.createElement("li");
    nuevoLi.className = temaActual.class;
    nuevoLi.innerText = temaActual.tema;
    listaSup.appendChild(nuevoLi);
  })
}

main();

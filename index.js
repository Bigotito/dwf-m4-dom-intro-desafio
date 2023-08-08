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

  console.log(elementosDeLista);

  let listaSup = document.querySelector('.lista');
  elementosDeLista.forEach((elemento) => {
    listaSup.removeChild(elemento);
  });

  // for(let i=0;i<elementosDeLista.length;i++){
  //   document.querySelector('.lista').removeChild(elementosDeLista[i]);
  // }

  let nuevoLi;
  cosasQueAprendimos.forEach((temaActual) => {
    nuevoLi = document.createElement("li");
    nuevoLi.className = temaActual.class;
    nuevoLi.innerText = temaActual.tema;
    listaSup.appendChild(nuevoLi);
  })
  
}

main();

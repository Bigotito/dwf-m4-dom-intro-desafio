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

function eliminarElementos(arrayAEliminar){
  arrayAEliminar.forEach((elemento) => {
    elemento.remove();
  })
}

function agregarALista(listaUsada, arrayAAgregar){
  let nuevoLi;
  arrayAAgregar.forEach((elementoActual) => {
    nuevoLi = document.createElement("li");
    nuevoLi.className = elementoActual.class;
    nuevoLi.innerText = elementoActual.tema;
    listaUsada.appendChild(nuevoLi);
  })
}

function main() {
  eliminarElementos(document.querySelectorAll('.lista li'));
  agregarALista(document.querySelector('.lista'), cosasQueAprendimos);
}

main();

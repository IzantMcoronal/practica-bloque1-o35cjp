// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png"). 

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];

var list = document.querySelector(".color-list");

for (i = 0; i < colorList.length; i++){

  let name = colorList[i].colorName;
  let color = colorList[i].hex;

  let li = document.createElement("li");

  if( i % 2 == 1){

    li.classList.add("color-item--odd");

  } else{
    li.classList.add("color-item");
  }
  
  li.classList.add("color-item");

  li.addEventListener( "click", e => function (){
    alert(name);
    e.stopPropagation();
  });

  let div1 = document.createElement("div");
  div1.classList.add("color-name");
  div1.textContent = "color " + name;

  let div2 = document.createElement("div");
  div2.classList.add("color-show");
  div2.textContent = "Muestra";
  div2.style.backgroundColor = color;

  let button1 = document.createElement("button");
  button1.classList.add("color-set");
  button1.textContent = "Next item color";

  let button2 = document.createElement("button");
  button2.classList.add("color-set");
  button2.textContent = "Page color";
  button2.addEventListener("click", function() {
  document.body.style.backgroundColor = color;
  });

  li.insertAdjacentElement("beforeend",div1);
  li.insertAdjacentElement("beforeend",button1);
  li.insertAdjacentElement("beforeend",div2);
  li.insertAdjacentElement("beforeend",button2);

  list.insertAdjacentElement("beforeend",li);
}








 // Le añadimos un evento al body con una funcion que lanza una alerta y le ponemos el mensaje de "Body"
document.body.addEventListener("click", function (){
  alert("Body");
});

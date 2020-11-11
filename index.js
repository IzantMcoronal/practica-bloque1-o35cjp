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

//Con esto capturamos la lista de los colores
var list = document.querySelector(".color-list");

//Hacemos un for para trabajar en la insercion de los li
for (i = 0; i < colorList.length; i++){

  // variable que contendra el nombre del color
  let name = colorList[i].colorName;
  //variable que contendra el codigo del color (En este caso de tipo hex: '#XXXXXX')
  let color = colorList[i].hex;

  // Aqui indicamos la creacion de los li
  let li = document.createElement("li");

  // << --Comenzamos con la insercion de la clase en los li -->
  
  //Primero le agregamos la clase ("color-item") a todos los li
  li.classList.add("color-item");
  
  //Con esta condicion le decimos que le ponga esta clase ("color-item--odd") solo a los pares. 
  if( i % 2 == 1){
    
    //Clase que se le añade a los li
    li.classList.add("color-item--odd");

  }  
  // Creamos un evento con una funcion de alerta que nos indicara el nomrbe del color.
  li.addEventListener( "click", a => {
    alert(name);
    
    //Controlamos la alerta
    a.stopPropagation();
  });

   // << --Comenzamos con la creacion de los contenedores en los li -->

  //Creamos el primer contenedor 
  let div1 = document.createElement("div");
  
  //Le añadimos la clase ("color-name")
  div1.classList.add("color-name");

  //Le añadimos el texto "color " + el nombre del color 
  div1.textContent = "color " + name;

  //Creamos el primer boton
  let button1 = document.createElement("button");
  
  //Le añadimos la clase ("color-set")
  button1.classList.add("color-set");

  //Le añadimos el texto ("Next item color") al boton
  button1.textContent = "Next item color";

  //Creamso el contenedor de la muestra
  let div2 = document.createElement("div");
  
  //Le añadimos la clase ("color-show")
  div2.classList.add("color-show");

  //Le ponemos el texto ("Muestra") al contenedor
  div2.textContent = "Muestra";

  //Le damos el color de fondo del color propio.
  div2.style.backgroundColor = color;

  //Creamos el segundo boton
  let button2 = document.createElement("button");
  
  //Le añadimos la clase ("color-set"
  button2.classList.add("color-set");
  
  //Le ponems el texto ("Page color") al boton
  button2.textContent = "Page color";
  
  //Le agregamos la funcionalidad al boton de cambiar el color del fondo de la pagina por el color suyo.
  button2.addEventListener("click", a => {
  document.body.style.backgroundColor = color;

  //Controlamos la propagacion
  a.stopPropagation();
  });

  // << --Comenzamos con la insercion de los li -->

  //Insertamos el primer contenedor en el li
  li.insertAdjacentElement("beforeend",div1);
  
  //Insertamos el primer boton en el li
  li.insertAdjacentElement("beforeend",button1);
  
  //Insertamso el segundo contenedor en el li
  li.insertAdjacentElement("beforeend",div2);

  //Insertamos el segundo boton en el li
  li.insertAdjacentElement("beforeend",button2);
  
  //Insertamos lso li en la Lista
  list.insertAdjacentElement("beforeend",li);
}
  // Con este for recorremos toda la colorList
  for (i = 0; i < colorList.length; i++) {
  
  // creamos al variable X
  let x;

  // Con este condicional le damos el valor de 1 al ultimo contenedor de la colorList
  if (i == colorList.length - 1) {
      x = 1;
  } else {
    x = i + 2;
  }

  //Capturamos los botones con la clase ("color-set")
  let button = document.getElementsByClassName("color-set");
  
  //Creamos la variable y (nos guardara los botones pares)
  let y = 2 * i;

  //creamos al variable color donde tenemos el color correspondiente
  let color = colorList[i].hex;
  
  //Creamos la variable li de los hijos de la variable list
  let li = list.children;

  //Le añadimos la funcionalidad para que al hacer clicar sobre el boton le cambie el color a al siguiente fila por su color.
  button[y].addEventListener("click", a => {
  li[x].style.backgroundColor = color;

  //Controlamos la alerta
  a.stopPropagation();
  });

}

  // Le añadimos un evento al body con una funcion que lanza una alerta y le ponemos el mensaje de "Body"
  document.body.addEventListener("click",a => { alert("Body");

  //Controlamos la alerta.
  a.stopPropagation();
});


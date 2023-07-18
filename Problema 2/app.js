alumnos = [
  {
    nombre: 'Alexi Badillo',
    email: 'Alexielchidoone@gmail.com',
    materia: 'Física Nuclear'
  },
  {
    nombre: 'El pepe',
    email: 'El pepe@gmail.com',
    materia: 'Física Cuántica'
  },
  {
    nombre: 'Roger Waters',
    email: 'Roger@gmail.com',
    materia: 'Math 3'
  },
  {
    nombre: 'La Hormiga',
    email: 'Hormigaatomica@gmail.com',
    materia: 'Física Atómica'
  },
  {
    nombre: 'El Chombo',
    email: 'Lechombe@gmail.com',
    materia: 'Música 1'
  }    
];
const boton = document.querySelector('.boton-confirmar');
const contenedor = document.querySelector('.grid-container');
for (alumno in alumnos) {
  let datos = alumnos[alumno];
  let nombre = datos['nombre'];
  let email = datos['email'];
  let materia = datos['materia'];
  let htmlCode = 
  `<div class="grid-item nombre">${nombre}</div>
   <div class="grid-item email">${email}</div>
   <div class="grid-item materia">${materia}</div>
   <div class="grid-item semana">
     <select class="semana-elegida">
       <option value="Semana 1">Semana 1</option>
       <option value="Semana 2">Semana 2</option>
     </select>
   </div>`;
  contenedor.innerHTML += htmlCode;
}
boton.addEventListener('click', () => {
  let confirmar = confirm('Realmente quieres confirmar las mesas?');
    if (confirmar) {
      document.body.removeChild(boton);
      let elementos = document.querySelectorAll('.semana');
      let semanasElegidas = document.querySelectorAll('.semana-elegida');
      for (elemento in elementos) {
      semana = elementos[elemento];
      semana.innerHTML = semanasElegidas[elemento].value;
  }
    }
})
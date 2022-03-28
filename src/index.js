// declaracion
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

// Fucion con condicionales
function SaludarEnIdiomas({ idioma }) {
  if (idioma == 'es') {
    return <span>Hello</span>;
  } else {
    return <span>Hola</span>;
  }
}

// componente
const Saludo = () => {
  const name = 'Jonathan';
  return (
    <p>
      {' '}
      <SaludarEnIdiomas idioma="es" /> Tatan {name} Rivera
    </p>
  );
};

/*************************************************** */

// array nombres
const nombres = ['Pedro', 'Juan', 'Andres', 'Arbey'];

// funcion obtener nombres
function getNombres() {
  const elementosLista = [];
  for (let i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>);
  }

  console.log(elementosLista);
  return elementosLista;
}

// componente
const Nombres = () => {
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
};
/************************************************** */

/*************************** Usando useState ******************************* */
const Button = () => {
  const [conteo, actualizarConteo] = useState(0);
  return (
    <div>
      <p>Presionado: {conteo}</p>
      <button onClick={() => actualizarConteo(conteo + 1)}>Click me!</button>
    </div>
  );
};
/*************************************************************************** */

/******************** Usando Ciclo de Vida Componente ********************** */
const Buttons = () => {
  useEffect(() => {
    console.log('Me ejecute');
  });
  return <button>Enviar</button>;
};
/*************************************************************************** */

/******************************* Usando Eventos **************************** */
const Saludar = () => {
  const [nombre, actualizarNombre] = useState('');
  return (
    <div>
      <input type="text" onChange={(ev) => actualizarNombre(ev.target.value)} />
      <p>Hola: {nombre}</p>
    </div>
  );
};

/*************************************************************************** */

// componente Principal
const App = () => {
  return (
    <div>
      <Saludar />
    </div>
  );
};

render(<App />, document.getElementById('root'));

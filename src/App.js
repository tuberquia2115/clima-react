import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const [consulta, guardarConsulta] = useState(false);
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consulta) {
        const appId = 'f3bfff65b3bfc80f36da5470520100fd'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const consulta = await fetch(url);
        const resultado = await consulta.json();
        console.log(resultado);

      }
    }
    consultarAPI();
  }, [consulta])
  return (
    <React.Fragment>
      <Header titulo="Clima React" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                guardarConsulta={guardarConsulta}
                guardarBusqueda={guardarBusqueda}
                busqueda={busqueda}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>

        </div>

      </div>
    </React.Fragment>

  );
}

export default App;

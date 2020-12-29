import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import ResultadoClima from './components/Resultado/ResultadoClima';
import Error from './components/Error/Error';
import Spinner from './components/Spinner/Spinner';


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const [consulta, guardarConsulta] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);
  const [spinner, guardarSpinner] = useState(false);



  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consulta) {
        guardarSpinner(true);
        setTimeout(async () => {
          const appId = 'f3bfff65b3bfc80f36da5470520100fd'
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
          const consulta = await fetch(url);
          const resultado = await consulta.json();
          guardarResultado(resultado);
          guardarConsulta(false);

          // Detectar si hubo resultados correctos en la busqueda
          if (resultado.cod === '404') {
            guardarError(true)

          } else {
            guardarError(false)
          }
          guardarSpinner(false);
        }, 3000)

      }
    }
    consultarAPI();
  }, [pais, ciudad, consulta])

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados " />
  } else {
    componente = <ResultadoClima resultado={resultado} />
  }

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
              {spinner ? <Spinner /> : componente}
            </div>
          </div>

        </div>

      </div>
    </React.Fragment>

  );
}

export default App;

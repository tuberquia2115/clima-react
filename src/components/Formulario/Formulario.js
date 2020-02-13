import React, { useState } from 'react'
const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {

    const [error, guardarError] = useState(false);
    // state del formulario
    const { ciudad, pais } = busqueda;

    // capturar la información
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // validad el formulario
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsulta(true);


    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    value={pais}
                    onChange={handleChange}
                    name="pais"
                    id="pais">
                    <option value="">-- Seleccione un País ---</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>

                </select>
                <label htmlFor="pais">País:</label>

            </div>
            <div className="input-field col s12">
                <input
                    value="Buscar clima"
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />

            </div>
        </form>
    );
}

export default Formulario;
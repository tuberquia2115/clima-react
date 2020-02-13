import React from 'react';
import PropTypes from 'prop-types'

const Error = ({ mensaje }) => (
    <p className="red darken-4 error">{mensaje}</p>
)

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;
import React from 'react'
import PropTypes from 'prop-types';

const Error = ({message}) => (
    <p className="alert alert-danger error">
        {message}
    </p>
)

// Documentar componente
Error.propTypes = {
    message: PropTypes.string.isRequired
}
 
export default Error
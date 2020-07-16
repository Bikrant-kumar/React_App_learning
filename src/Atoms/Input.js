import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
    const {
        placeholder,
        type,
        text
       } = props;
    return (
        <div>
              <input type={type} placeholder={placeholder} value={text} />
        </div>
    )
}

Input.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Input
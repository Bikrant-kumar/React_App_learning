import React from 'react'
import PropTypes from 'prop-types'

function Label(props) {
    const {
        text
       } = props;
    return (
        <div>
            <h3>{text}</h3>
        </div>
    )
}

Label.propTypes = {
    text: PropTypes.string.isRequired
}

export default Label
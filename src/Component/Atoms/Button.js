import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const {
       onclick,
       text,
       style,
        endIcon
      } = props;

    return (
        <div>   
            <button 
                onClick={onclick}
                style={style}
                 endIcon={endIcon}
             >{text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    saveInputData:PropTypes.func.isRequired
}

export default Button
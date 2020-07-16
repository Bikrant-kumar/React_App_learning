import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

function Button(props) {
    const {
       saveInputData,
       text
      } = props;

    return (
        <div>   
            <button className="button button1"
                onClick={saveInputData}
                data-testid="submit"
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
import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Atoms/Label'
import Input from '../Atoms/Input' 

function LabelInput(props) {
    const {
        label,
        placeholder,
        text,
        type
       } = props;
    return (
        <div>
              <div >
                  <Label text={label} />
                  <Input value={text} placeholder={placeholder} type={type} />
               </div>
        </div>
    )
}

LabelInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default LabelInput
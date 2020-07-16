import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Atoms/Button'
import LabeledInput from '../Molecules/LabelInput'

function Form(props) {
  const {
    saveInputData,
    buttonText
   } = props;
    return (
        <div>
               <form >{
               props.fields.map((field, i) => (<LabeledInput label={field.label} placeholder={field.placeholder} type={field.type} key={i} />))
                    }
                    <Button saveInputData={saveInputData} text={buttonText} />
                   </form> 
        </div>
    )
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  saveInputData: PropTypes.func.isRequired
}

export default Form
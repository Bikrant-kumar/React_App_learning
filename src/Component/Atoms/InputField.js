import React from 'react'

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

export default Input
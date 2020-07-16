import React from 'react'
import PropTypes from 'prop-types'
import Form from '../Organisms/Form'

function Home(props) {
   const saveInputData = () => 
    alert("Thanks for you feedback")
   ;

    return (
        <div>
           <Form fields={props.form} saveInputData={saveInputData} buttonText="Submit" />
        </div>
    )
}

Home.propTypes = {
    form: PropTypes.array
}

Home.defaultProps = {
    form: [
      {
        label: 'Email-Id',
        placeholder: 'email',
        type:'text'
      },
      {
        label: 'FeedBack',
        placeholder: 'feedback',
        type:'text'
      },
    ],
  };

export default Home
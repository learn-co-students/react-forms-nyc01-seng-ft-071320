import React from 'react'

const DisplayData = (props) => {
  return(
  <div>{props.formData.firstName} {props.formData.lastName}</div>
  )
}

export default DisplayData

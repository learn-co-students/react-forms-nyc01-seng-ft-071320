import React from 'react'
import DisplayData from './DisplayData'
import Form from './Form'

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({
      submittedData: dataArray
    })
  }

  listOfSubmittedData = () => {
    return this.state.submittedData.map( e => <DisplayData formData={e} />)
  }

  render() {
    return(
      <div>
        <Form formData={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {this.listOfSubmittedData()}
      </div>
    )
  }
}

export default ParentComponent

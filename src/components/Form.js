import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
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

  handleSubmit = (e) => {
    e.preventDefault()
    let formData = { 
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
    this.setState({ firstName: "", lastName: ""})
    //this.sendFormDataSomewhere(formData)
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
    return <div>
            <span>{data.firstName} </span> 
            <span>{data.lastName}</span>
          </div>
    })
  }

  render() {
    console.log(this.state)
    console.log(this.listOfSubmissions())
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e) }>
          <input type="text" name="firstName" onChange={event => this.changeHandler(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.changeHandler(event)} value={this.state.lastName} />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;
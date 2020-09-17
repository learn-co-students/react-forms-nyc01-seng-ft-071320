import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  NameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.NameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.NameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;
import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;

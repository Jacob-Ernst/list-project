import React, { Component } from 'react';

class NewItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', nextItemId: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.value, this.state.nextItemId);

    this.setState((prevState, props) => ({
      nextItemId: prevState.nextItemId + 1,
      value: ''
    }));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
      </form>
    );
  }
}

export default NewItemForm;

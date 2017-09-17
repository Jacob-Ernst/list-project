import React, { Component } from 'react';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: ''};
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.name, this.state.nextItemId);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} name={this.state.name}/>
      </form>
    );
  }
}

export default NewItem;

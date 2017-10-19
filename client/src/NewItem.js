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
    const params = {name: this.state.name};

    this.props.onSubmit(params);
    this.setState({name: ''});

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

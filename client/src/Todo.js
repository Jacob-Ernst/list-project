import React, { Component } from 'react';
import NewItem from './NewItem';
import Client from './Client';
import ItemList from './ItemList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    Client.getAll(res => {
      this.setState({
        items: res
      });
    });
  }

  addItem(name, id) {
    this.setState((prevState, props) => ({
      items: prevState.items.concat(
        {
          name: name
        }
      )
    }));
  }

  handleItemDelete(id) {
    this.setState((prevState, props) => ({
      items: prevState.items.filter(
        (item) => {
          return item.props.id !== id
        }
      )
    }));
  }

  render() {
    return (
      <div>
        <ItemList items={this.state.items} onDelete={this.handleItemDelete}/>
        <NewItem onSubmit={this.addItem}/>
      </div>
    );
  }
}

export default Todo;

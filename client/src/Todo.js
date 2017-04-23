import React, { Component } from 'react';
import NewItemForm from './NewItemForm';
import Item from './Item';
import ItemList from './ItemList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleNewItemSubmit = this.handleNewItemSubmit.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.state = {items: []};
  }

  handleNewItemSubmit(value, id) {
    this.setState((prevState, props) => ({
      items: prevState.items.concat(
        <Item key={id} id={id} value={value} onDelete={this.handleItemDelete}/>
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
        <ItemList listItems={this.state.items}/>
        <NewItemForm onSubmit={this.handleNewItemSubmit}/>
      </div>
    );
  }
}

export default Todo;

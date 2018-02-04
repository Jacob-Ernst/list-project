import React, { Component } from 'react';
import NewItem from './NewItem';
import Client from './Client';
import ItemList from './ItemList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

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

  addItem(params) {
    Client.create(params, (res) => {
      this.setState((prevState, props) => ({
        items: prevState.items.concat(res)
      }));
    });
  }

  deleteItem(id) {
    Client.destroy(id, (res) => {
      this.setState((prevState, props) => ({
        items: prevState.items.filter(
          (item) => {
            return item._id !== id;
          }
        )
      }));
    });
  }

  updateItem(params) {
    Client.update(params);
  }

  render() {
    return (
      <div>
        <ItemList items={this.state.items} onDelete={this.deleteItem} onUpdate={this.updateItem}/>
        <NewItem onSubmit={this.addItem}/>
      </div>
    );
  }
}

export default Todo;

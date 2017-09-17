import React from 'react';
import Item from './Item';

function ItemList(props) {
  return <ul>
            {
              props.items.map((item, index) =>
                <Item key={index} name={item.name} onDelete={props.onDelete}/>
              )
            }
         </ul>;
}

export default ItemList;

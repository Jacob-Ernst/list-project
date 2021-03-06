import React from 'react';
import Item from './Item';

function ItemList(props) {
  return <ul>
            {
              props.items.map((item, index) =>
                <Item key={index} item={item} onDelete={props.onDelete} onUpdate={props.onUpdate}/>
              )
            }
         </ul>;
}

export default ItemList;

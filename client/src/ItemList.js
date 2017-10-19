import React from 'react';
import Item from './Item';

function ItemList(props) {
  return <ul>
            {
              props.items.map((item, index) =>
                <Item key={index} item={item} onDelete={props.onDelete}/>
              )
            }
         </ul>;
}

export default ItemList;

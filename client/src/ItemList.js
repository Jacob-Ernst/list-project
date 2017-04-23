import React from 'react';

function ItemList(props) {
  return <ul>
            {
              props.listItems.map((item) =>
                  item
              )
            }
         </ul>;
}

export default ItemList;

import React, { useState } from 'react'
import ItemList from './ItemList';

const ShoppingList = () => {
    const [items] = useState({
        items1: 'ogórki',
        items2: 'sok',
        items3: 'coś do picia'
    })
    
    return (  
        <div>
            <h1>Lista Zakupów</h1>
            <ul>
                <ItemList name={items.items1} example={2 + 2} />                
                <ItemList name={items.items2}  />                
                <ItemList name={items.items3}  />                
            </ul>
        </div>
    );
}
 
export default ShoppingList;
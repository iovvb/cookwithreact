import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
    const itemsElement = items.map((item)=>{
        return <Item key={item.id} {...item}></Item>
    })
  return (
      <div className='item-grid'>
      {itemsElement}
      </div>
  )
}

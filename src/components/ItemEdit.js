import React from 'react'

export default function ItemEdit({item , handleItemsChange ,handleItemDelete}) {

  function handleChange(changes){
    handleItemsChange(item.id,{...item , ...changes})
}


  return (
      <>
          <input onInput={e=>handleChange({name:e.target.value})} value={item.name} className='recipie--item-edit__input' type="text" placeholder='Name'/>
          <input onInput={e=>handleChange({amount:e.target.value})} value={item.amount} className='recipie--item-edit__input' type="text" placeholder='Amount'/>
          <button onClick={()=>{handleItemDelete(item.id)}} className='recipie--item-edit__btn btn btn--danger'>&times;</button>
      </>
  )
}

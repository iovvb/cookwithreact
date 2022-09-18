import React , {useContext} from 'react'
import ItemEdit from './ItemEdit'
import { RecipieContext } from './App'
import { v4 as uuidv4 } from 'uuid';


export default function RecipieEdit({recipie}) {
    const {handleRecipieChange ,handleRecipieSelect} = useContext(RecipieContext)

    function handleChange(changes){
        handleRecipieChange(recipie.id,{...recipie , ...changes})
    }

    function handleItemDelete (id){
        handleChange({items : recipie.items.filter(i=>i.id !==id) })
      }

      function handleItemAdd (id){
          const newItem = {
              id:uuidv4(),
              name:"",
              amount:""
          }
          handleChange({items : [...recipie.items,newItem]})
      }

    function handleItemsChange(id,editedItem){
        const newItems = [...recipie.items]
        const index = newItems.findIndex(e => e.id === id)
        newItems[index] = editedItem
        handleChange({items:newItems})
}
  return (
      <>
      <div className='recipie--edit__section'>
          <div className='recipie--edit__btn-container'>
            <button onClick={()=>{handleRecipieSelect(undefined)}} className='btn recipie--edit__btn-container'>&times;</button>
          </div>
          <div className='recipie--edit__details-grid'>
              <label className='recipie--edit__label' htmlFor='name'>Name </label>
              <input className='recipie--edit__input' onChange={e=>handleChange({name : e.target.value})} value={recipie.name} type="text" id="name"  />
              <label className='recipie--edit__label' htmlFor='cookTime'>Cook Time </label>
              <input className='recipie--edit__input' onChange={e=>handleChange({cookTime : e.target.value})} value={recipie.cookTime} type="text" id="cookTime"  />
              <label className='recipie--edit__label' htmlFor='servings'>Servings </label>
              <input className='recipie--edit__input' onChange={e=>handleChange({servings : e.target.value})} value={recipie.servings} type="text" id="servings"  />
              <label className='recipie--edit__label' htmlFor='instructions'>Instructions </label>
              <textarea className='recipie--edit__input' onChange={e=>handleChange({instructions : e.target.value})} value={recipie.instructions} type="text" id="instructions" />
              <br />
          </div>
          <label className='recipie--edit__label'>Items Needed </label>
              <div className='recipie--edit__items-grid'>
                  <div>Name</div>
                  <div>Amount</div>
                  <div></div>
                  {recipie.items.map((item)=>{
                      return <ItemEdit handleItemDelete={handleItemDelete} handleItemsChange={handleItemsChange} key={item.id} item={item}></ItemEdit>
                  })}
              </div>
              <div className='recipie--edit__add-items-btn-container'>
                  <button onClick={()=>{handleItemAdd()}} className='btn btn--primary recipie--edit__add-items-btn'>Add Item</button>
              </div>
      </div>
      </>
  )
}

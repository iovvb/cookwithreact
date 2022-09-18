import React,{useContext} from 'react'
import ItemList from './ItemList'
import { RecipieContext } from './App'

export default function Recipie(props) {
    const {handleRecipieDelete , handleRecipieSelect} = useContext(RecipieContext)
    const {name,
        servings,
        id,
        cookTime,
        instructions,
        items
    } = props
  return (
    <div className='recipie'>
        <div className='recipie__header'>
            <h3 className='recipie__title'>{name}</h3>
            <div>
            <button onClick={()=>handleRecipieSelect(id)} className='btn btn--primary mr-1'>Edit</button>
            <button onClick={()=>handleRecipieDelete(id)} className='btn btn--danger'>Delete</button>
            </div>
        </div>
        <div className='recipie__row'>
            <span className='recipie__label'>Cook Time:</span>
            <span className='recipie__value'>{cookTime}</span>
        </div>
        <div className='recipie__row'>
            <span className='recipie__label' >Servings: </span>
            <span className='recipie__value'>{servings}</span>
        </div>
        <div className='recipie__row'>
            <span className='recipie__label'>Instructions: </span>
            <div className='recipie__value recipie__value--intended recipie__value--instructions'>{instructions}</div>
        </div>
        <div className='recipie__row'>
            <span className='recipie__label'>Items Needed: </span>
            <div className='recipie__value recipie__value--intended'>{<ItemList items={items}></ItemList>}</div>
        </div>
    </div>
  )
}

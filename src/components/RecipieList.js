import React , {useContext} from 'react'
import Recipie from './Recipie'
import { RecipieContext } from './App'

export default function RecipieList({recipies}) {
  const {handleRecipieAdd} = useContext(RecipieContext)
  return (
    <div className='recipie-list'>
    <div>
    {
        recipies.map((constRecipie)=>{
            return <Recipie key={constRecipie.id} {...constRecipie}></Recipie>
        })
    }
    </div>
    <div className='recipie-list_add-recipie-btn-container'>
    <button onClick={handleRecipieAdd} className='btn btn--primary'>Add Recipie</button>
    </div>
    </div>
  )
}

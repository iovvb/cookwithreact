import React  from 'react';
import RecipieSearch from './RecipieSearch';

export default function RecipieSearchList({recipies , recipieContextValue}) {
  return (
    <div className='recipie-list'>
    <div>
    {
        recipies.map((constRecipie)=>{
            return <RecipieSearch recipieContextValue={recipieContextValue} key={constRecipie.id} {...constRecipie}></RecipieSearch>
        })
    }
    </div>
    </div>
  )
}

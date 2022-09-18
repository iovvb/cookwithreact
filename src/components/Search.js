import { render } from '@testing-library/react';
import React  from 'react';
import RecipieSearchList from './RecipieSearchList';

export default function Search(props) {
    const {recipies , setSearch ,recipieContextValue} = props

    function handleSearch(searchedTerm){
        
        if(searchedTerm.length > 0){
            let foundedRecipies = recipies.filter(element => element.name.includes(searchedTerm));
            console.log(foundedRecipies)
            setSearch("defined")
            render(
                <RecipieSearchList recipieContextValue={recipieContextValue} recipies={foundedRecipies}/>
            )

        }
        else{
            console.log("Search is Empty")
            setSearch(undefined)
        }
    }

  return (
      <>
      <div className='search-container'>
          <input 
          onChange={(e)=>{handleSearch(e.target.value)}} 
          className='search-field' placeholder='Search' 
          type="text" id='search'/>
      </div>
      </>
  )
}

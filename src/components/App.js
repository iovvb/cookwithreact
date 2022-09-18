import React , {useState , useEffect , useReducer} from 'react'
import RecipieList from "./RecipieList";
import RecipieEdit from './RecipieEdit';
import { v4 as uuidv4 } from 'uuid';
import Search from './Search';
import "../css/app.css"

export const RecipieContext = React.createContext()

const LOCAL_STORAGE_KEY = "cookingwithreact.app.recipies"

function App() {
  const storedRecipies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ;
  const [selectedRecipieId , setSelectedRecipie] = useState("")
  const [search , setSearch] = useState(undefined)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

  if(storedRecipies.length < 1){
    constRecipies.forEach((constRecipie)=>{
      storedRecipies.push(constRecipie)
    })
  }

  const [recipies , setRecipies] = useState(storedRecipies)
  const selectedRecipie = recipies.find(recipie => recipie.id === selectedRecipieId)
  
  useEffect(()=>{
    console.log("App Re Rendered : " + search)
    handleClick()
    forceUpdate();
  },[search])

  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON !=null) setRecipies(JSON.parse(recipeJSON))
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify([...recipies]))
  },[recipies])
  
  const recipieContextValue = {
    handleRecipieAdd,
    handleRecipieSelect,
    handleRecipieChange,
    handleRecipieDelete
  }
  
  function handleRecipieChange(id,editedRecipie){
    const newRecipies = [...recipies]
    const index = newRecipies.findIndex(e => e.id === id)
    newRecipies[index] = editedRecipie
    setRecipies(newRecipies)
  }

  function handleRecipieSelect(id){
    setSelectedRecipie(id)
  }

  function handleRecipieAdd(){
    let newRecipie = {
      id:uuidv4(),
      name:"",
      cookTime:"",
      servings : "",
      instructions : "",
      items:[
        {
          id:uuidv4(),
          name:"",
          amount:""
        }
      ]
    }
    handleRecipieSelect(newRecipie.id)
    setRecipies([...recipies,newRecipie])
  }

  function handleRecipieDelete (id){
    if(selectedRecipieId !=null && selectedRecipieId === id){
      setSelectedRecipie(undefined)
    }
    setRecipies(recipies.filter(recipie => recipie.id !== id))
  }

  return (
      <RecipieContext.Provider value={recipieContextValue}>
        <Search setRecipies={setRecipies} recipies={recipies} recipieContextValue={recipieContextValue} setSearch = {setSearch}></Search>
        {!search && <RecipieList recipies={recipies} ></RecipieList>}
        {selectedRecipie && <RecipieEdit recipie = {selectedRecipie}/>}
      </RecipieContext.Provider>  )
}

export let constRecipies = [
  {
    id : 1,
    name:"Poha",
    cookTime:"00:10",
    servings : "2",
    instructions : "1. Take Poha \n2. Make Poha \n3. Eat Poha",
    items : [
      {
        id:1,
        name:"Poha",
        amount:"1 Packet"
      },
      {
        id:2,
        name:"Namkeen",
        amount:"2 Packet"
      },
      {
        id:3,
        name:"Spices",
        amount:"3 Packet"
      }
    ]
  },
  {
    id : 2,
    name:"Maggi",
    cookTime:"00:20",
    servings : "3",
    instructions : " 1. Take Maggi \n 2. Make Maggi \n 3. Eat Maggi",
    items : [
      {
        id:1,
        name:"Maggi",
        amount:"1 Packet"
      },
      {
        id:2,
        name:"Veges",
        amount:"1 Packet"
      },
      {
        id:3,
        name:"Spices",
        amount:"1 Packet"
      }
    ]
  },
]

export default App;

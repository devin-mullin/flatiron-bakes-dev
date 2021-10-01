import CakeCard from "./CakeCard.js";
import Header from "./Header";
import Search from "./Search";
import { useState, useEffect } from "react"
import CakeDetail from "./CakeDetail"
import CakeForm from "./CakeForm"
import Filter from "./Filter.jsx";
import { Route, Switch } from "react-router";
import NavBar from "./NavBar.jsx";
import CardContainer from "../CardContainer.jsx";



function App( ) {
  
  // const[selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakeList] = useState([])
  const [visible, setVisible] = useState(false)
  const [flavor, setFlavor] = useState(null)
  
  // todo: create fetch that will get our data when component mounts for the first time and only the first time
  
  const cakesDB = 'http://localhost:4000/cakes'

  useEffect(() => {
    
    fetch('http://localhost:4000/cakes')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCakeList(data)

    })}
  ,[])
// ^^^^^^^

  useEffect(() => {
    fetch('http://localhost:4000/flavor')
    .then(res=>res.json())
    .then(flavor => setFlavor(flavor))
  },[])

  const flavorFilter = (event) => {
    
  }

  const handleRemove = (event) => {
    const cakeToRemove = event.target.name
    //console.log(cakeToRemove)
    const newCakeList = cakeList.filter(cake => cake.flavor !== cakeToRemove)
    //console.log(newCakeList)
    return setCakeList(newCakeList);

  }

  function handleAddCake(cake) {
    fetch('http://localhost:4000/cakes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cake)
    })
    .then(res=>res.json())
    .then(newCake=>{
      setCakeList([
        ...cakeList, newCake
      ])
    })
    
  }

  // const handleDelete = (id) =>{
  //   fetch(`http://localhost:4000/cakes/${id}`, {
  //     method: "DELETE"
  //   })
  //   .then(res=>res.json())
  //   .then(()=> {
  //     const filteredCakes = cakeList.filter(cake=>cake.id !== id)
  //     setCakeList(filteredCakes)
  //     setSelectedCake(null)
  //   })
  // }

  // const handleUpdate = (cake) => {
  //   fetch(`http:localhost:4000/cakes/${cake.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify({liked:!cake.liked}),
  //   })
  //   .then(res=>res.json())
  //   .then(updatedCake => {
  //     const updatedCakeList = cakeList.map(clCake => {
  //       if (clCake.id === cake.id){
  //         return updatedCake
  //       } else {
  //         return clCake
  //       }
  //   })
  //   setSelectedCake(updatedCake)
  //   setCakeList(updatedCakeList)
  //   })
  // }

  const renderForm = () => {
    return <CakeForm handleAddCake={handleAddCake} />
  }

  return (
    <>
    <NavBar />
    <Header /> 
      <button onClick={() => setVisible(!visible)}>{visible ? 'Goodbye Form' : 'Form'}</button>

      <br/>
    <Switch>
      <Route path="/cakes/new" component={renderForm}>
          <CakeForm />
        </Route>
          <Route path ="/cakes/:id">
            <CakeDetail  />
          </Route>
     
           {/* <Filter flavor={flavor} setFlavor={setFlavor}/>
            <br />
           <CakeDetail  /> */}
      
      <Route path="/">
          <CardContainer cakeList={cakeList}/>
    
      </Route>
    </Switch>
  
    </>
    
  )
}

export default App;
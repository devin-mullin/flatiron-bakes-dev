import React from "react";
import { useState } from "react";
import CakeCard from "./components/CakeCard";
import Search from "./components/Search";

function CardContainer({cakeList}) {
    const [visible, setVisible] = useState(false)
    console.log(cakeList)
    return (
        <>
         {visible ? <Search /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'Goodbye Form' : 'Form'}</button>
     {cakeList.map(cake => <CakeCard  cake={cake} />)}
    
        </>
    )
}

export default CardContainer
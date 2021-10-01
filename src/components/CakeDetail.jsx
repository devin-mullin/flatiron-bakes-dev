import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CakeDetail({cake, handleDelete, handleUpdate}) {
    const [cakes, setCake] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const id = useParams().id
    console.log(useParams)
    useEffect(()=>{
        fetch(`http://localhost:4000/cakes/${id}`)
        .then(res=>res.json())
        .then(cakes => {
            setCake(cakes)
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded) return <h1>Loading...</h1>

    return (
        <>
            <img src={cake.image} style={{width: "200px"}} alt="cake"/>
            <p>Flavor: {cake.flavor}</p>
            <p>Size: {cake.size}</p>
            <p>Price: ${cake.price}</p>
            <p>{cake.description}</p>
            <button onClick={() => handleUpdate(cake.id)}>{cake.liked ?"❤️" : "♡"}</button>
            <button onClick={()=> handleDelete(cake)}>Delete this cake!</button>
        </>
    )
}

export default CakeDetail;
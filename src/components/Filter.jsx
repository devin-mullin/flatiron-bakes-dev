import react from "react"

function Filter({flavor, setFlavor}) {
    return(
        <>
            <div>
                <button onClick={setFlavor}>{flavor}</button>
            </div>
        </>
    )
}

export default Filter
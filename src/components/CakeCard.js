function CakeCard({cake, setSelectedCake, handleRemove, setCakeList}) {
  console.log(cake)  
  return (
      <>
      <div>
      <h1>{cake.flavor}</h1>
      <p>{cake.price}</p>
      <p>{cake.size}</p>
      </div>
      <button name={cake.flavor}>Remove Cake</button>
      </>
  );
};

export default CakeCard;
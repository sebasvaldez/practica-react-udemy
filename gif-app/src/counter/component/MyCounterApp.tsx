import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {


  const {handleAdd, handleReset, handleSubtrack, counter}=useCounter()


  return (

    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

      <h1>counter : {counter}</h1>


    <div style={{display:"flex", gap:"10px"}}>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtrack}>-1</button>
      <button onClick={handleReset}>reset</button>
    </div>




    </div>
  )
}

import { useState } from "react";
// import './ItemCounter.css'
import styles from'./ItemCounter.module.css'

interface Props {
    title:string,
    itemQuantity?:number
}


export const ItemCounter = ({title, itemQuantity=1}:Props) => {

  const [counter1,setCounter1] =useState(itemQuantity);


const handleAdd = ()=>{
  setCounter1(counter1+1);
}

const handleSubstract = ()=>{
  if(counter1 >0) {
  setCounter1(counter1-1);
  }

}

  return (
    <section
     className={styles.itemRow}
    >
      <span
      className={styles["item-text"]}
        style={{
          color : counter1 === 1 ? 'red' : 'black'
        }}
      >
        {title}
      </span>
      <button
      onClick={handleAdd}
      >+1</button>
      <span>{counter1}</span>
      <button
      onClick={handleSubstract}
      >-1</button>
    </section>
  );
};

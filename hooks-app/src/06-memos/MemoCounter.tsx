import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterarionNumber: number) => {
  console.time("Heavy_stuff_started");

  for (let index = 0; index < iterarionNumber; index++) {
    console.log("Ahí vamos...");
  }

  console.timeEnd("Heavy_stuff_started");

  return `${iterarionNumber} iteraciones realizadas.`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(400);
  const myHeavyValue = useMemo(() => heavyStuff(counter), []);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo- useMemo {myHeavyValue}</h1>
      <hr />
      <h4>Counter: {counter}</h4>
      <h4>Counter: {counter}</h4>

      <button className="bg-blue-500 py-1 px-4 rounded-md " onClick={increment}>
        +1
      </button>
    </div>
  );
};

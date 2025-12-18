import { useCallback, useState } from "react";
import { Mytitle } from "./ui/Mytitle";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("hola ");
  const [subTitle, setSubTitle] = useState("Mundo");

  //si escribo esta funcion fuera de mi componente no necesito memorizarla,
  const handleCallMyAPI = useCallback(() => {
    console.log("LLama a mi API");
  }, []);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo-App</h1>

      <Mytitle title={title} />
      <MySubTitle subTitle={subTitle} callMyAPI={handleCallMyAPI} />

      <button
        className="bg-blue-500 text-white px-4 py-2 
      rounded-md cursor-pointer"
        onClick={() => setTitle(`Hello `)}
      >
        Cambiar título
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2
       rounded-md cursor-pointer"
        onClick={() => {
          setSubTitle("Horld");
        }}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};

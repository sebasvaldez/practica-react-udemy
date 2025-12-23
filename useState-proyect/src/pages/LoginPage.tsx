import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1>Login</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10">
        <input type="number" placeholder="ID del usaurio" />
        <Button type="submit">Iniciar sesión</Button>
      </form>
      <Link to={"/about"}>
        <Button variant={"ghost"} className="">
          Volver a la pagina principal
        </Button>
      </Link>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />

      <pre className="my-4">{JSON.stringify({}, null, 2)}</pre>

      <Button variant={"destructive"}><Link to={"/login"}>Salir</Link></Button>
    </div>
  );
};

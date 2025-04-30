import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage, DCPage, HeroesRoutes } from "../heroes";
import { Navbar } from "../ui";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />}/>
      </Routes>
    </>
  );
};

import type { CSSProperties } from "react";

export const MyAwesomeApp = () => {
  const firstName = "Sebas";
  const lastName = "Valdez";
  const favoritesgames = ["AoE2", "Lineage 2", "Mir4"];
  const isActive = true;
  const address = {
    zipCode: "abc-123",
    country: "Argentina",
  };

  const myStyles: CSSProperties = {
    backgroundColor: "red",
    color: "black",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  };
  
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p style={myStyles}>{favoritesgames.join(", ")}</p>
      <p>{isActive ? "Activo" : "No activo"}</p>
      <p>{address.zipCode}</p>
      <p>{address.country}</p>
    </>
  );
};

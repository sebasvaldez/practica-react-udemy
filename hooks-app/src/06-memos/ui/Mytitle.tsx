import React from "react";

interface Props {
  title: string;
}

export const Mytitle = React.memo(({ title }: Props) => {
  console.log("My title rerender");
  return <h1 className="text-3xl">{title}</h1>;
});

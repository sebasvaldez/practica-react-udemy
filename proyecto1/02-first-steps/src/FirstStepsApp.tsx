import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Age of empires 2", quantity: 4 },
  { productName: "Batman: Arkam Assilum", quantity: 2 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {/* <ItemCounter title="Nintendo Switch 2" itemQuantity={1} />
      <ItemCounter title="Age of empires 2" itemQuantity={2} />
      <ItemCounter title="Batman: Arkam Assilum" itemQuantity={3} /> */}

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter
          key={productName}
          title={productName}
          itemQuantity={quantity}
        />
      ))}
    </>
  );
}

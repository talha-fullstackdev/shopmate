import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector } from "react-redux";
export const Cart = () => {
    useTitle("Cart");
  const products = useSelector((state) => state.CartSlice.cartList);
  const total = useSelector((state) =>
    state.CartSlice.cartList.reduce(
      (total, product) => total + product.price,
      0
    )
  );
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} / ${total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

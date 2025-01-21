import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove } from "../cartSlice/CartSlice";
import "./cartanimate.css";

export const CartAnimate = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.CartSlice.cartList);
  const total = useSelector((state) =>
    state.CartSlice.cartList.reduce(
      (total, product) => total + product.price,
      0
    )
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      // Show the cart animation
      setIsVisible(true);

      // Set a timer to hide the cart animation after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // Clear the timer when component unmounts or when products change
      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsVisible(false);
    }
  }, [products]);

  return (
    <div className={`cart-animate-wrapper ${isVisible ? "show" : ""}`}>
      <section className="cart">
        <div className="cart-items">
          <h1>
            Cart Items: {products.length} / ${total.toFixed(2)}
          </h1>
          {products.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="cart-item-details">
                <p className="product-name">{product.name}</p>
                <p className="cart-item-color">
                  Color: {product.selectedColor}
                </p>
                <p className="cart-item-color">Type: {product.selectedType}</p>
                <button
                  onClick={() => dispatch(remove(product))}
                  className="delete-btn"
                >
                  <MdDelete />
                </button>
              </div>
              <div className="cart-item-price">${product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="cart-sidebar">
          <h2>Order Summary</h2>
          <p>Items: {products.length}</p>
          <div className="total-price">Total: ${total.toFixed(2)}</div>
        </div>
      </section>
    </div>
  );
};

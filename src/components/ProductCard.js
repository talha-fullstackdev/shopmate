import { add, remove } from "../cartSlice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const { id, name, price, image } = product;
  const myProduct = useSelector((state) => state.CartSlice.cartList);

  useEffect(() => {
    const productInCart = myProduct.find((item) => item.id === id);
    setIsInCart(!!productInCart);
  }, [myProduct, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

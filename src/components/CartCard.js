import { useDispatch } from "react-redux";
import { remove } from "../cartSlice/CartSlice";
import "./CartCard.css";
export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image, selectedColor, selectedType } = product;
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <div className="cartCard-details">
        <p className="productName">{name}</p>
        {selectedColor && (
          <p className="productColor">Color: {selectedColor}</p>
        )}
        {selectedType && <p className="productType">Type: {selectedType}</p>}
        <p className="productPrice">${price}</p>
        <button
          onClick={() => dispatch(remove(product))}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

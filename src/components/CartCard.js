// import "./CartCard.css";
// import { remove } from "../cartSlice/CartSlice";
// import { useDispatch } from "react-redux";
// export const CartCard = ({product}) => {
//   const {name, price, image} = product;
//   const dispatch = useDispatch()
//   return (
//       <div className="cartCard">
//         <img src={image} alt={name} />
//         <p className="productName">{name}</p>
//         <p className="productPrice">${price}</p>
//         <button onClick={()=>dispatch(remove(product))}>Remove</button>
//       </div>
//   )
// }
// updtaed for color
// import "./CartCard.css";
// import { remove } from "../cartSlice/CartSlice";
// import { useDispatch } from "react-redux";

// export const CartCard = ({ product }) => {
//   const { name, price, image, selectedColor } = product; // Include selectedColor
//   const dispatch = useDispatch();

//   return (
//     <div className="cartCard">
//       <img src={image} alt={name} />
//       <p className="productName">{name}</p>
//       <p className="productPrice">${price}</p>
//       {selectedColor && <p className="productColor">Color: {selectedColor}</p>} {/* Display selected color */}
//       <button onClick={() => dispatch(remove(product))}>Remove</button>
//     </div>
//   );
// };

/// updated for total price
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../cartSlice/CartSlice";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { name, price, image, selectedColor } = product;
  const dispatch = useDispatch();
  
  // Calculate total price
  const total = useSelector((state) => state.CartSlice.cartList.reduce((total, item) => total + item.price, 0));

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <div className="cartCard-details">
        <p className="productName">{name}</p>
        {selectedColor && (
          <p className="productColor">Color: {selectedColor}</p>
        )}
        <p className="productPrice">${price.toFixed(2)}</p>
        <button onClick={() => dispatch(remove(product))} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

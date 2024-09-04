// import { add, remove } from "../cartSlice/CartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import "./ProductCard.css";

// export const ProductCard = ({ product }) => {
//   const [isInCart, setIsInCart] = useState(false);
//   const [selectedColor, setSelectedColor] = useState('');
//   const dispatch = useDispatch();
//   const { id, name, price, image, colors } = product; // Assuming colors are part of the product
//   const myProduct = useSelector((state) => state.CartSlice.cartList);

//   useEffect(() => {
//     const productInCart = myProduct.find((item) => item.id === id);
//     setIsInCart(!!productInCart);
//   }, [myProduct, id]);

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div className="productCard">
//       <img src={image} alt={name} />
//       <p className="name">{name}</p>
      
//       <div className="filters">
//         <p>Color:</p>
//         <div className="colorFilters">
//           {colors.map((color) => (
//             <label key={color} className={`colorOption ${color}`}>
//               <input
//                 type="checkbox"
//                 checked={selectedColor === color}
//                 onChange={() => handleColorChange(color)}
//               />
//               {color}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="action">
//         <p>${price}</p>
//         {isInCart ? (
//           <button className="remove" onClick={() => dispatch(remove(product))}>
//             Remove
//           </button>
//         ) : (
//           <button onClick={() => dispatch(add(product))}>Add To Cart</button>
//         )}
//       </div>
//     </div>
//   );
// };
//////////////////////////
// import { add, remove } from "../cartSlice/CartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import "./ProductCard.css";

// export const ProductCard = ({ product }) => {
//   const [isInCart, setIsInCart] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const dispatch = useDispatch();
//   const { id, name, price, image, colors } = product;
//   const myProduct = useSelector((state) => state.CartSlice.cartList);

//   useEffect(() => {
//     const productInCart = myProduct.find((item) => item.id === id);
//     setIsInCart(!!productInCart);
//   }, [myProduct, id]);

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div className="productCard">
//       <img src={image} alt={name} />
//       <p className="name">{name}</p>
      
//       <div className="filters">

//         <div className="colorFilters">
//           {colors.map((color) => (
//             <label
//               key={color}
//               className={`colorOption ${color.toLowerCase()} ${selectedColor === color ? 'selected' : ''}`}
//             >
//               <input
//                 type="radio"
//                 name="color"
//                 checked={selectedColor === color}
//                 onChange={() => handleColorChange(color)}
//               />
//               {color}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="action">
//         <p>${price}</p>
//         {isInCart ? (
//           <button className="remove" onClick={() => dispatch(remove(product))}>
//             Remove
//           </button>
//         ) : (
//           <button onClick={() => dispatch(add(product))}>Add To Cart</button>
//         )}
//       </div>
//     </div>
//   );
// };
//////////////////// updated for color
// import { add, remove } from "../cartSlice/CartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import "./ProductCard.css";

// export const ProductCard = ({ product }) => {
//   const [isInCart, setIsInCart] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const dispatch = useDispatch();
//   const { id, name, price, image, colors } = product;
//   const myProduct = useSelector((state) => state.CartSlice.cartList);

//   useEffect(() => {
//     const productInCart = myProduct.find((item) => item.id === id);
//     setIsInCart(!!productInCart);
//   }, [myProduct, id]);

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const handleAddToCart = () => {
//     dispatch(add({ ...product, selectedColor }));
//   };

//   return (
//     <div className="productCard">
//       <img src={image} alt={name} />
//       <p className="name">{name}</p>
      
//       <div className="filters">
//         <div className="colorFilters">
//           {colors.map((color) => (
//             <label
//               key={color}
//               className={`colorOption ${color.toLowerCase()} ${selectedColor === color ? 'selected' : ''}`}
//             >
//               <input
//               className="color-btn"
//                 type="radio"
//                 name="color"
//                 checked={selectedColor === color}
//                 onChange={() => handleColorChange(color)}
//               />
//               {color}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="action">
//         <p>${price}</p>
//         {isInCart ? (
//           <button className="remove" onClick={() => dispatch(remove({ id, selectedColor }))}>
//             Remove
//           </button>
//         ) : (
//           <button onClick={handleAddToCart}>Add To Cart</button>
//         )}
//       </div>
//     </div>
//   );
// };
///////////////////
import { add, remove } from "../cartSlice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch = useDispatch();
  const { id, name, price, image, colors } = product;
  const myProduct = useSelector((state) => state.CartSlice.cartList);

  useEffect(() => {
    const productInCart = myProduct.find((item) => item.id === id);
    setIsInCart(!!productInCart);
  }, [myProduct, id]);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch(add({ ...product, selectedColor }));
    setSelectedColor(null)
  };

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
  
      <div className="filters">
        <div className="colorFilters">
          {colors.map((color) => (
            <label
              key={color}
              className={`colorOption ${color.toLowerCase()} ${selectedColor === color && 'selected' }`}
            >
              <input
                className="color-btn"
                type="radio"
                // name={`color-${id}`}
                value={color}
                checked={selectedColor === color}
                onChange={handleColorChange}
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove({ id, selectedColor }))}>
            Remove
          </button>
        ) : (
          <button onClick={handleAddToCart}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

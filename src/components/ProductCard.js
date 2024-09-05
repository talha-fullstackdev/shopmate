
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { add, remove } from "../cartSlice/CartSlice";
import "./ProductCard.css";
import { toast } from "react-toastify";
export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [showFilters, setShowFilters] = useState(false); 
  const dispatch = useDispatch()

  const { id, name, price, image, colors, type } = product;
  const myProduct = useSelector((state) => state.CartSlice.cartList);
  useEffect(() => {
    const productInCart = myProduct.find((item) => item.id === id);
    setIsInCart(!!productInCart);
  }, [myProduct, id]);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedType) {
      toast.error("Please select  color and  type.");
      return;
    }
    dispatch(add({ ...product, selectedColor, selectedType }));
    setSelectedColor(null);
    setSelectedType(null);
    setShowFilters(!showFilters)
  };

  const toggleFilters = () => {
    // setShowFilters((prev) => !prev); 
    setShowFilters(!showFilters) // refactore the above line
  };

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>

      <button onClick={toggleFilters} className="filter-btn">
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      <div className={`filters ${showFilters ? "show" : "hide"}`}>
        <div className="colorFilters">
          <p>Select Color:</p>
          {colors.map((color) => (
            <label
              key={color}
              className={`colorOption ${color.toLowerCase()} ${selectedColor === color && "selected" }`}
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

        <div className="typeFilters">
          <p>Select Type:</p>
          {type.map((types) => (
            <label
              key={types}
              className={`typeOption ${types.toLowerCase()} ${selectedType === types && "selected" }`}
            >
              <input
                className="type-btn"
                type="radio"
                // name={`type-${id}`}
                value={types}
                checked={selectedType === types}
                onChange={handleTypeChange}
              />
              {types}
            </label>
          ))}
        </div>
      </div>

      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button
            className="remove"
            onClick={() => dispatch(remove(id))}
          >
            Remove
          </button>
        ) : (
          <button className="addto-cart" onClick={handleAddToCart}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

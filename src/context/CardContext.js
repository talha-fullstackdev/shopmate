const { createContext, useContext } = require("react");

const initialState = {
  cartList: [],
  total: 0,
};
const CartContext = createContext(initialState);
export const cartProvider = ({ children }) => {
  const value = {
    total: 0,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

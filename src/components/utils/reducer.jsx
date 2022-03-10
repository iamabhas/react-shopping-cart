export const reducer = (state, action) => {
  switch (action.type) {
    case "clear_cart":
      return {
        ...state,
        products: [],
      };
      break;
    case "remove_item":
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.id !== action.payload;
        }),
      };
      break;
    case "increase_amount":
      let tempCart = state.products
        .map((product) => {
          if (product.id === action.payload) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        })
        .filter((product) => {
          return product.amount !== 0;
        });
      return {
        ...state,
        products: tempCart,
      };
      break;
    case "decrease_amount":
      let tempCart2 = state.products
        .map((product) => {
          if (product.id === action.payload) {
            return { ...product, amount: product.amount - 1 };
          }
          return product;
        })
        .filter((product) => {
          return product.amount !== 0;
        });
      return {
        ...state,
        products: tempCart2,
      };
      break;
    case "total":
      const newValues = state.products.reduce(
        (cartTotal, product) => {
          const { price, amount } = product;
          const grandTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += grandTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total: newValues.total, amount: newValues.amount };
      break;
    default:
      return state;
  }
};

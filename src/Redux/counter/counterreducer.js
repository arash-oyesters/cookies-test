const INCREMENT = "count/increment";

const DECREMENT = "count/decrement";

export const increment = () => {
    return {
      type: INCREMENT,
    };
  };
export const decrement = () => {
    return {
      type: DECREMENT,
    };
  };

const initialState = {
    value: 2,
  };
  
  const counterReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          value: state.value + 1,
        };
      case DECREMENT:
        return {
          ...state,
          value: state.value - 1,
        };
      default:
        return state;
    }
  };
  export default counterReducer;
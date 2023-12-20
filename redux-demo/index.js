const BUY_CAKE = "BUY_CAKE";

// Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// Reducer: (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // copy of state object
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

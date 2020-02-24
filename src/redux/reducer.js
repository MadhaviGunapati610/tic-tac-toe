let initialState = {
  counter: 10
}

export const reducer = (state=initialState, action) => {
  console.log("value");
switch(action.type){
  case 'increment' : return {counter: state.counter + 1}
  default: return state;
}
}
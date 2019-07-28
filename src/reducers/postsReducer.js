/* 
Rule of Reducer:
1. it must return any value besides 'undefined'
2. produces data / state using only previous state
3. it cannot decide what value to return
4. Must not mutate it's input 'state' argument (reducers are pure)

*/

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    case "UPDATE_POST":
      return action.payload;
    case "DELETE_POST":
      return action.payload;

    default:
      return state;
  }
};

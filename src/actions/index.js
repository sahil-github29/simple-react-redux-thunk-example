/* 
1. Redux-thunk invokes our function and passes into a "dispatch" and "getState"
   functions.

2. we can pass actions into the "dispatch function" thoe actions will be sent to
  all of the  different middleware and eventually forwarding it off to our reducers

"getState" can be called on a redux store and that wil return all of our data.

through "dispatch" we can change any data we want
through "getState" we can read or access any data that we want

Note: => once we get the response we from the API, we can call "dispatch" function manually dispatch an action.
With Redux-thunk we can manually dispatch an action at some point in the future




*/

import jsonPlaceholder from "../config";

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POST",
    payload: response
  });
};

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

//Post request JSON format
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},

*/

import jsonPlaceholder from "../config";
import _ from "lodash";

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POST",
    payload: response
  });
};

// 1. =>  Memoise version solution to repeating API calls
// Note: The problem with this approach is that if you update the user
// it not return the updated user!!

/*
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response
  });
});*/

// 2. improved solution to repeating API calling
// Note: =>  we will call action inside action

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  // lodash map function return specified properties from an object
  // and unique will give you unique properties
  const userIds = _.uniq(_.map(getState().posts.data, "userId"));

  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response
  });
};

import $ from 'jquery';

// creates a custom function to send requests and receive the responses
export function createClient({ actionTypePrefix, requestType, url }) {
  // Creates a success string and a fail string to use as types for reducers
  const SUCCESS = `${actionTypePrefix}_SUCCESS`;
  const FAIL = `${actionTypePrefix}_FAIL`;

  // create request function to be assigned when createClient is called
  function request(data) {
    const token = sessionStorage.getItem('auth') ? sessionStorage.getItem('auth') : null;
    // create thunk and ajax request for when we receive a response from the database
    function thunk(dispatch) {
      return $.ajax({
        url,
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: requestType,
        headers: { auth: token },
        success(response) {
          // sets the token in the case the user is signing in or signing up
          if (response.token) {
            sessionStorage.setItem('auth', response.token);
          }

          // dispatches an action to redux
          dispatch({
            type: SUCCESS,
            payload: response
          });

        },
        error(response) {
          dispatch({
            type: FAIL,
            payload: response
          });
        }
      });
    }

    return thunk;
  }

  // assigns type properties to request function for easy checking within reducers
  request.FAIL = FAIL;
  request.SUCCESS = SUCCESS;

  // returns the request function
  return request;
}

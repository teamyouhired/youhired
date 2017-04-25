import $ from 'jquery';

export function createClient({ actionTypePrefix, requestType, url }) {
  const SUCCESS = `${actionTypePrefix}_SUCCESS`;
  const FAIL = `${actionTypePrefix}_FAIL`;


  function request(data) {
    const token = sessionStorage.getItem('auth') ? sessionStorage.getItem('auth') : null;
    function thunk(dispatch) {
      return $.ajax({
        url,
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: requestType,
        headers: { auth: token },
        success(response) {

          if (response.token) {
            sessionStorage.setItem('auth', response.token);
          }

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

  request.FAIL = FAIL;
  request.SUCCESS = SUCCESS;

  return request;
}

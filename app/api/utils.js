import $ from 'jquery';

export function createClient({ actionTypePrefix, requestType, url }) {
  const SUCCESS = `${actionTypePrefix}_SUCCESS`;
  const FAIL = `${actionTypePrefix}_FAIL`;
  const token = sessionStorage.getItem ? sessionStorage.getItem('auth') : null;

  function request(data) {
    function thunk(dispatch) {
      return $.ajax({
        url,
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: requestType,
        headers: { auth: token },
        success(response) {
          // var xhr = new XMLHttpRequest()
          // console.log(xhr.getResponseHeader('auth'));

          if (response.token) {
            sessionStorage.setItem('auth', response.token);
          }

          dispatch({
            type: SUCCESS,
            payload: response
          });

        },
        error(response) {
          console.log('fail function ran');
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

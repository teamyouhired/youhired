import $ from 'jquery';
//import { axios } from 'axios';

export function createClient({ actionTypePrefix, requestType, url }) {
  const SUCCESS = `${actionTypePrefix}_SUCCESS`;
  const FAIL = `${actionTypePrefix}_FAIL`;

  function request(data) {
    function thunk(dispatch) {
      return $.ajax({
        url,
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: requestType,
        success(response) {
          console.log('success function ran');
          console.log(response.header.auth);
          dispatch({
          type: SUCCESS,
          payload: response
          });

        },
        fail(response) {
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

// export function createClient({ actionTypePrefix, requestType, url }) {
//   const SUCCESS = `${actionTypePrefix}_SUCCESS`;

//   function request(data) {
//     function thunk(dispatch) {
//       return axios({
//         url,
//         contentType: 'application/json',
//         data: JSON.stringify(data),
//         method: requestType,
//
//         }
//       }).then(response) {
  //       dispatch({
    //       type: SUCCESS,
    //       payload: response
//         });
//     }

//     return thunk;
//   }

//   request.SUCCESS = SUCCESS;

//   return request;
// }
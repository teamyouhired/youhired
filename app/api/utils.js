import $ from 'jquery';
//import { axios } from 'axios';

export function createClient({ actionTypePrefix, requestType, url }) {
  const SUCCESS = `${actionTypePrefix}_SUCCESS`;

  function request(data) {
    function thunk(dispatch) {
      return $.ajax({
        url,
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: requestType,
        success(response) {
          dispatch({
          type: SUCCESS,
          payload: response
          });
        }
      });
    }

    return thunk;
  }

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
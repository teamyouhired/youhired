import axios from 'axios';

export function actionName(element) {
  //need to define an action creator and needs to return an action
  //an object with a type property, usually has a type(purpose), and payload(data that describes action)
  return {
    type: 'ACTION_TYPE',
    payload: element
  }
}
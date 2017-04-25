import { ADD_CONTACT, CHANGE_DATE } from './JobInformationActionTypes';

export const addContact = ({ companyName, position, firstName, lastName, phoneNumber, email, address, city, state, zip }) => {
  return {
    type: ADD_CONTACT,
    payload: {
      companyName,
      position,
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      city,
      state,
      zip
    }
  };
};

export const changeDate = ({ startDate = null, currentDate = null }) => {
  return {
    type: CHANGE_DATE,
    payload: {
      startDate,
      currentDate
    }
  };
};

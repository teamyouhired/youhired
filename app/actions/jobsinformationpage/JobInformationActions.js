import ADD_CONTACT from './JobInformationActionTypes';

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

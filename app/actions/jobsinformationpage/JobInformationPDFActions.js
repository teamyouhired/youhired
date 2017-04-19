import CREATE_PDF from './JobInformationActionTypes';

export const createPdf = ({ pdf }) => {
  return {
    type: CREATE_PDF,
    payload: {
      pdf
    }
  };
};

import React, { createClass, PropTypes } from 'react';
import { displayJobForm, hideModal } from '../../actions/modals/ModalActions';
import AddJob from '../dashboard/jobs/AddJob';


// const AddJobModal = createClass({
//   render() {

//   }
// });

// const mapStateToProps = (state) => {

// };

// const mapActionsToProps = {

// };

// export default connect(mapStateToProps, MapActionsToProps)(AddJobModal);

const AddJobModal = ({ userId = null, addJob, hideModal }) => (
  <div>
    <h1>Add a New Application!</h1>
    <AddJob addJob={addJob} hideModal={hideModal} />
  </div>
);

export default AddJobModal;

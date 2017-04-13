import React, { createClass, PropTypes } from 'react';
import { changePage } from '../../../actions/NavigationActions';
import { browserHistory } from 'react-router';

const JobCard = createClass({
  displayName: 'JobCard',

  propTypes: {
    changePage: PropTypes.func.isRequired,
    activeComponent: PropTypes.string.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  onJobClick(event) {
    // const path = `/job-information/${this.props.companyname}/application`; for when we navigate to a single application page
    const path = '/job-information';
    this.context.router.history.push(path)
  },

  render() {
    const { companyname, status } = this.props;
    return (
      <div onClick={this.onJobClick} className='card-horizontal'>
          <div className="card-company">
            <p>{companyname}</p>
          </div>
          <div className="card-status">
            <p>{status}</p>
          </div>
          <div className="card-icons">
            <span className='add-task glyphicon glyphicon-plus-sign'></span>
          </div>
      </div>
    );
  }

});

export default JobCard;

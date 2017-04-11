import React, { createClass } from 'react';

const Activity = createClass({
  render() {
    const { activitylogcontent, createdat } = this.props;
    return (
      <div>
        <div className='card-horizontal'>
          <h5 className='description'>{activitylogcontent}</h5>
          <br/>
          <h6 className='date-due'>{createdat}</h6>
        </div>
      </div>
    );
  }
});

export default Activity;

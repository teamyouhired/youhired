import React, { createClass } from 'react';

const Activity = createClass({
  render() {
    const { activitylogcontent, createdat } = this.props;
    return (
      <div>
        <div className=''>
          <h5 className=''>{activitylogcontent}</h5>
          <br/>
          <h6 className=''>{createdat}</h6>
        </div>
      </div>
    );
  }
});

export default Activity;

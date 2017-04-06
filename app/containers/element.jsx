import React, { PropTypes } from 'react';
import { connect} from 'react-redux'

class /*element*/ extends PropTypes {
  render () {

    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(element) {
  return {
    element: some.element
  }
}

export default connect(mapStateToProps)(element)
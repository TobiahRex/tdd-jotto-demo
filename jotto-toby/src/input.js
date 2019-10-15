import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
  render() {
    const contents = this.props.success ? null : (
      <form data-test="input-form" className="form-inline">
        <input type="text" className="mb-2 mx-sm-3" placeholder="enter guess" data-test="input-box"/>
        <button data-test="submit-button" />
      </form>
    )

    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}


export default connect(({ success }) => ({
  success,
}))(Input);

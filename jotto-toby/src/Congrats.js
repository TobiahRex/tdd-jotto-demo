import React from 'react';
import { bool } from 'prop-types';

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-success">
        <p data-test="component-message" className="alert alert-success">
          Congrats!! That' correct
        </p>
      </div>
    )
  }
  return (
    <div data-test="component-success" />
  )
}

Congrats.propTypes = {
  success: bool.isRequired,
}

export default Congrats;

import React from 'react';

export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-success">
        <p data-test="component-message">
          Congrats!! That' correct
        </p>
      </div>
    )
  }
  return (
    <div data-test="component-success" />
  )
}

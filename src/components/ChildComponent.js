// ChildComponent.js
import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent(props) {
  return (
    <>
      <div align='center'>
        <h2>{props.message}</h2>
      </div>
    </>
  );
}

ChildComponent.propTypes = {
    message: PropTypes.string
  }

export default ChildComponent;

// ParentComponent.js
import React from 'react';
import CommonHeader from './CommonHeader.js'
import ChildComponent from './ChildComponent.js'

function ParentComponent() {
  return (
    <>
      <div align='center'>
        <CommonHeader />
        <ChildComponent message='This is message prop from Parent' />
      </div>
    </>
  );
}

export default ParentComponent;

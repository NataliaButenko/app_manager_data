import React from 'react';

export const myInput = props => {
  return (
    <div className="field">
      <label>{ props.label }</label>
      <input
        { ...props.input }
        type={ props.type }
        placeholder={ props.inputValue || props.placeholder }
        className={ props.meta.invalid && props.meta.touched ? 'errorField' : '' }/>
      {
        props.meta.error && props.meta.touched &&
        <div className='error'>
          { props.meta.error }
        </div>
      }
    </div>
  );
};

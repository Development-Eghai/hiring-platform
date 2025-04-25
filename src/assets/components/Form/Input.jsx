import React from 'react';
import { Form } from 'react-bootstrap';

const CustomInput = ({ label, type, name, value, onChange, accept, inputClassname, fileRef }) => {
  return (
    <Form.Group className="">
      <Form.Label>{label}</Form.Label>
      {type === 'file' ? (
        <Form.Control 
          ref={fileRef} 
          type={type} 
          name={name} 
          onChange={onChange} 
          accept={accept} 
          style={{ display: 'none' }}
        />
      ) : (
        <Form.Control 
          className={inputClassname} 
          type={type} 
          name={name} 
          value={value} 
          onChange={onChange} 
          accept={accept} 
        />
      )}
    </Form.Group>
  );
};

export default CustomInput;

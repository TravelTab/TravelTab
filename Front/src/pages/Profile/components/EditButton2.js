import React from 'react';
import './Profile.css';

const EditButton2 = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="edit-button">
      저장
    </button>
  );
};

export default EditButton2;

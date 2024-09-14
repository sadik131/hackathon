import React from 'react';
function CreateModal({ closeModal, children }) { 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>

      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
        {children} 
      </div>
    </div>
  );
}

export default CreateModal;

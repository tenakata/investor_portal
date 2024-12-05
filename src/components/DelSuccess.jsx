import React from 'react';

const DelSuccess = ({ setDeluser, userId, onDelete }) => {
  return (
    <div className='modal-overlay fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className="bg-white flex flex-col shadow-lg z-30 justify-center items-center w-inputWidth h-statusheight p-7">
        <div className='text-trash opacity-50 mb-2'>
          <i className='bx bxs-trash'></i>
        </div>
        <h1 className='font-semibold text-lg mb-2'>Delete Investor</h1>
        <h2 className='opacity-50'>Are you sure you want to remove John Doe</h2>
        <h2 className='mb-3 opacity-50'>as an investor</h2>
        <div className='flex gap-2'>
          <button className='text-buttonBlue px-7 py-2 rounded border border-buttonBlue'
            onClick={() => setDeluser(false)}>
            Cancel
          </button>
          <button className='text-white bg-buttonBlue px-7 py-2 rounded'
            onClick={() => {
              onDelete(userId);
              setDeluser(false);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelSuccess;

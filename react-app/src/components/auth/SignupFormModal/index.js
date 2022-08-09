import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignUpForm from './SignUpForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  // console.log("Modal lifeeeeeeeee LOGIN", showModal)

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Sign up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm hideModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;

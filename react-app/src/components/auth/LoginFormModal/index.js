import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  // console.log("Modal lifeeeeeeeee LOGIN", showModal)

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Log in
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm hideModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;

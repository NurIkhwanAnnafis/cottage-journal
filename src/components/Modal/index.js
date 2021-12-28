import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const CustomModal = (props) => {
  const { showModal, setShowModal, title, children } = props;

  const handleOk = () => {
    setShowModal({ 
      showModal: false,
      detailBukti: null
     });
  };

  const handleCancel = () => {
    setShowModal({ 
      showModal: false,
      detailBukti: null
     });
  };

  return (
    <>
      <Modal title={title} visible={showModal} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
import { useState, useEffect } from "react";

export const useModelAdminList = () => {
  const [listData, setListData] = useState([]);
  const [showModalBukti, setShowModalBukti] = useState({
    showModal: false,
    detailBukti: null,
  });

  const setOpenBukti = () => {
    setShowModal(true);
  };

  useEffect(() => {},[]);

  return {
    listData,
    setListData,
    showModalBukti,
    setOpenBukti,
    setShowModalBukti
  }
}
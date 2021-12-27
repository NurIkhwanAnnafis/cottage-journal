import { useState, useEffect } from "react";

export const useModelAdminList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {},[]);

  return {
    listData,
    setListData
  }
}
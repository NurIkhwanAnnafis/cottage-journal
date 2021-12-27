import { useState, useEffect } from "react";

export const useModelAdminForm = () => {
  const [form, setForm] = useState({});

  useEffect(() => {},[]);

  return {
    form,
    setForm
  }
}
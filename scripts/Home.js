import React, { useEffect, useState } from "react";

const [carrito, setCarrito] = useState([]);

useEffect(() => {
  const data =
    JSON.parse(localStorage.getItem("carrito")) || [];

  setCarrito(data);
}, []);
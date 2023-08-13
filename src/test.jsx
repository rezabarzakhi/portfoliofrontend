import React, { useEffect, useState } from "react";

export default function Test() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const headers = { Authorization: "Bearer HYbKA2G0TTk_7RSE1wbj" };
    fetch("https://the-one-api.dev/v2/character", { headers })
      .then((response) => response.json())
      .then((data) => setProduct(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
//   const names = product.filter((item) => item.name === "Biblo");
//   console.log(names);
    // console.log(product.map((item) => {
    //    if (item.name === "Bilbo" ) return item

    // }));
  return <div>test</div>;
}

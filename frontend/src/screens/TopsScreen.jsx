import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoTable from "../components/CryptoTable";

const TopsScreen = () => {
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const coinsResp = await axios.get("/top/coins");
      setCoins(coinsResp.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {coins && <CryptoTable data={coins} />}
    </div>
  );
};

export default TopsScreen;

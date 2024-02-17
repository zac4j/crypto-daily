import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoTable from "./components/CryptoTable";
import CoinCards from "./components/CoinCards";
import NFTCardDeck from "./components/NFTCardDeck";
import TopNav from "./TopNav";
// import DataFetcher from "./DataFetcher";
const sections = [
  {
    key: "trends",
    title: "Trends",
    nft_url: "/trending/nfts",
    coin_url: "/trending/coins",
  },
  { key: "tops", title: "Tops", url: "/top/coins" },
];
const App = () => {
  const [selectSection, setSelectSection] = useState("trends");
  const [coins, setCoins] = useState(null);
  const [tNFTs, setTNFTs] = useState(null);
  const [tCoins, setTCoins] = useState(null);

  const onSectionSelect = (eventKey) => {
    setSelectSection(eventKey);
  };

  useEffect(() => {
    const fetchData = async () => {
      const coinsResp = await axios.get(
        "http://localhost:8080" + sections[1].url
      );
      setCoins(coinsResp.data);

      const nftsResp = await axios.get(
        "http://localhost:8080" + sections[0].nft_url
      );
      setTNFTs(nftsResp.data);

      const tCoinsResp = await axios.get(
        "http://localhost:8080" + sections[0].coin_url
      );
      setTCoins(tCoinsResp.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <TopNav sections={sections} onSelectionChange={onSectionSelect} />
      {coins && <CryptoTable data={coins.slice(0, 10)} />}{" "}
      {tCoins && <CoinCards data={tCoins} />}{" "}
      {tNFTs && <NFTCardDeck data={tNFTs} />}{" "}
      {/* Pass data only if it exists */}{" "}
    </div>
  );
};
export default App;

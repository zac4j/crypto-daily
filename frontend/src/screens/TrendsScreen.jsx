import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinCards from "../components/CoinCards";
import NFTCardDeck from "../components/NFTCardDeck";

const TrendsScreen = () => {
  const urls = {
    nft_url: "/trending/nfts",
    coin_url: "/trending/coins",
  };

  const [tNFTs, setTNFTs] = useState(null);
  const [tCoins, setTCoins] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const nftsResp = await axios.get("http://localhost:8080" + urls.nft_url);
      setTNFTs(nftsResp.data);

      const tCoinsResp = await axios.get(
        "http://localhost:8080" + urls.coin_url
      );
      setTCoins(tCoinsResp.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {tNFTs && <NFTCardDeck data={tNFTs} />}
      {tCoins && <CoinCards data={tCoins} />}
    </div>
  );
};

export default TrendsScreen;

const NFTCardDeck = ({ data }) => {
  return (
    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-4">Trending NFTs</h2>
        </div>
        <div class="card-deck d-block d-lg-flex">
          {data.map((nft) => (
            <div class="card m-2 mb-4 mb-lg-2">
              <img
                class="card-img-top"
                src={getLargerPic(nft.thumb)}
                alt={nft.name}
              />
              <div class="card-body pt-3">
                <h5 class="card-title my-2">{nft.symbol}</h5>
                <p class="small card-text text-muted">Floor {nft.floorPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getLargerPic(text) {
  return text.replace("small", "large");
}

export default NFTCardDeck;

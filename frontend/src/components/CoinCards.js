import Card from "react-bootstrap/Card";

const CoinCards = ({ data }) => {
  return (
    <div class="container-fluid py-2">
      <h2 class="font-weight-light">Trending Coins</h2>
      <div class="d-flex flex-row flex-wrap">
        {data.map((nft) => (
          <Card
            style={{
              minHeight: "32px",
              minWidth: "32px",
              marginRight: "6px",
              marginBottom: "6px",
            }}
          >
            <Card.Img variant="top" src={getLargerPic(nft.image)} />
            <Card.Body>
              <Card.Title>{nft.symbol}</Card.Title>
              <Card.Text>{nft.name}</Card.Text>
              <div dangerouslySetInnerHTML={{ __html: nft.price }} />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

function getLargerPic(text) {
  return text.replace("small", "large");
}

export default CoinCards;

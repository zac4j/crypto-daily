import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

const CoinTable = ({ data }) => {
  return (
    <div class="container-fluid py-2">
      <h2 class="font-weight-light">Trending Coins</h2>
      <Card body>
        <Table responsive>
          <thead responsive>
            <tr>
              <th>RANK</th>
              <th>SYMBOL</th>
              <th>NAME</th>
              <th>LAST</th>
              <th>% CHANGE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin, index) => (
              <tr key={coin.id}>
                <td>{index + 1}</td>
                <td>
                  <Image src={coin.image} width="32px" height="32px" />{" "}
                  {coin.symbol.toUpperCase()}
                </td>
                <td>{coin.name}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: coin.price }} />
                </td>
                <td>{coin.priceChangePercentage}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default CoinTable;

import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const CryptoTable = ({ data }) => {
  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <div class="container-fluid py-2">
      <h2 class="font-weight-light">Top Coins</h2>
      <Card body>
        <Table responsive>
          <thead responsive>
            <tr>
              <th>#</th>
              <th>SYMBOL</th>
              <th>NAME</th>
              <th>LAST</th>
              <th>CHANGE (24h)</th>
              <th>% CHANGE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((crypto, index) => (
              <tr key={crypto.id}>
                <td>{index + 1}</td>
                <td>{crypto.symbol.toUpperCase()}</td>
                <td>{crypto.name}</td>
                <td>
                  {crypto.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>
                  {crypto.priceChange.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{crypto.priceChangePercentage.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default CryptoTable;

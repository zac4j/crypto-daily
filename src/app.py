#!/usr/bin/env python3

import requests
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Crypto.sqlite3'

API_ENDPOINT = 'https://api.coingecko.com/api/v3'
API_GET_COIN_PRICE = '/simple/price'
API_GET_COIN_MARKET = '/coins/market'

TOP_COIN_IDS = 'bitcoin,ethereum,litecoin,bitcoin-cash,binancecoin,eos,ripple,stellar,chainlink,polkadot'

DEFAULT_CURRENCY = "usd"

'''
TODO
1.Fetching data from an external source such as a REST API.
2.Storing the data in a database.
'''

'''
Define the database model
that is used to store 
the Top Coins.
'''

db = SQLAlchemy(app)
class TopCoins(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    coinId = db.Column(db.String(20))
    price = db.Column(db.Numeric(20))

    def __repr__(self) -> str:
        return f"CoinMarket(id={self.id!r},coinId={self.coinId!r}, name={self.name!r}, symbol={self.symbol!r}, price={self.price!r})"
    
'''
Helper function to get top10 coins price
using API https://www.coingecko.com/api/documentation
'''


def get_coins_price(url: str, ids: str):
    response = requests.get(url, params = {"ids":ids, "vs_currencies":DEFAULT_CURRENCY})
    return response.json()


'''
In main we first get the current top coins price and then 
create a new object that we can add to the database. 
'''
if __name__ == "__main__":
    url = API_ENDPOINT + API_GET_COIN_PRICE
    coins = get_coins_price(url=url, ids=TOP_COIN_IDS)
    print(f"get coins: {coins}")
    for coin in coins:
        price = coins[coin]['usd']
        new_entry = TopCoins(coinId = coin["id"], price = price)
        print(f"create new entry: {coin}, value: ${price}")
        db.session.add(new_entry)
    db.session.commit
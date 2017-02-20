import request from 'request-promise';

const URL = 'https://api.bitcoinaverage.com/ticker/global/USD';
export default async () => {
  const price = await request(URL, { json: true });
  return `The price is ${price.last} as of ${price.timestamp}`;
}
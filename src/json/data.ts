import Bitcoin from "../assets/Bitcoin SV (BSV).svg";
import Binance from "../assets/Binance Coin (BNB).svg";
import Ethereum from "../assets/Ethereum (ETH).svg";
import SHIBA from "../assets/SHIBA INU (SHIB).svg";
import Solana from "../assets/Solana (SOL).svg";

export const data = [
  {
    image: Bitcoin,
    title: "Bitcoin (BTC)",
    value: "$31,812.80",
    percentage: "+10%",
    price: "$60,000",
    tvl: {
      first: Solana,
      second: Ethereum,
      third: Binance,
    },
  },
  {
    image: Solana,
    title: "Bitcoin (BTC)",
    value: "$32.83",
    percentage: "-12.32%",
    price: "$60,000",
    tvl: {
      first: Bitcoin,
      second: Ethereum,
      third: Binance,
    },
  },
  {
    image: Ethereum,
    title: "Bitcoin (BTC)",
    value: "$1,466.45",
    percentage: "-11.93%",
    price: "$60,000",
    tvl: {
      first: Solana,
      second: Bitcoin,
      third: Binance,
    },
  },
  {
    image: Binance,
    title: "Bitcoin (BTC)",
    value: "$1.00",
    percentage: "+0.26%",
    price: "$60,000",
    tvl: {
      first: Solana,
      second: Ethereum,
      third: Binance,
    },
  },
  {
    image: SHIBA,
    title: "Bitcoin (BTC)",
    value: "$0.00000001948",
    percentage: "-8.1%",
    price: "$60,000",
    tvl: {
      first: Solana,
      second: Ethereum,
      third: Binance,
    },
  },
];

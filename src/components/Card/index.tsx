import "./card.css";

interface CardParams {
  image: string;
  title: string;
  value: string;
  percentage: string;
  price: string;
  tvl: any;
}

const Card = ({ image, title, value, percentage, price, tvl }: CardParams) => {
  console.log(image);

  return (
    <div className="card mx-auto flex justify-center">
      <div className="outside-circle">
        <div className="inside-circle flex justify-center items-center">
          <div className="icon-circle flex justify-center items-center">
            <img src={image} alt="Bitcoin" />
          </div>
        </div>
      </div>
      <p className="title">{title}</p>
      <div className="value-container">
        <p className="value">{value}</p>
        <p className="right">{percentage}</p>
      </div>
      <p className="title price">Price</p>
      <div className="value-container">
        <p className="value">{price}</p>
      </div>
      <p className="title tvl-title">TVL</p>
      <div className="tvl">
        <div
          className={
            "tvl-icon " +
            (tvl.first.includes("BSV")
              ? "bitcoin"
              : tvl.first.includes("BNB")
              ? "binance"
              : tvl.first.includes("ETH")
              ? "ethereum"
              : tvl.first.includes("SHIB")
              ? "shiba"
              : tvl.first.includes("SOL")
              ? "solana"
              : "")
          }
        >
          <img src={tvl.first} alt="" />
        </div>
        <div
          className={
            "tvl-icon " +
            (tvl.second.includes("BSV")
              ? "bitcoin"
              : tvl.second.includes("BNB")
              ? "binance"
              : tvl.second.includes("ETH")
              ? "ethereum"
              : tvl.second.includes("SHIB")
              ? "shiba"
              : tvl.second.includes("SOL")
              ? "solana"
              : "")
          }
        >
          <img src={tvl.second} alt="" />
        </div>
        <div
          className={
            "tvl-icon " +
            (tvl.third.includes("BSV")
              ? "bitcoin"
              : tvl.third.includes("BNB")
              ? "binance"
              : tvl.third.includes("ETH")
              ? "ethereum"
              : tvl.third.includes("SHIB")
              ? "shiba"
              : tvl.third.includes("SOL")
              ? "solana"
              : "")
          }
        >
          <img src={tvl.third} alt="" />
        </div>
      </div>
      <p className="title pop">Popular pairs</p>
    </div>
  );
};

export default Card;

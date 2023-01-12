import "./trending-assets.css";
import { data } from "../../json/data";
import Card from "../../components/Card";
import { Key } from "react";

const TrendingAssets = () => {
  return (
    <div className="container flex justify-center items-center">
      {data.map(
        (
          card: {
            image: string;
            title: string;
            value: string;
            percentage: string;
            price: string;
            tvl: any;
          },
          index: Key | null | undefined
        ) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            price={card.price}
            tvl={card.tvl}
          />
        )
      )}
      {/* <div className="card mx-auto flex justify-center">
        <div className="outside-circle">
          <div className="inside-circle flex justify-center items-center">
            <div className="icon-circle flex justify-center items-center">
              <img src={Bitcoin} alt="Bitcoin" />
            </div>
          </div>
        </div>
        <p>Shiba Inu (SHIB)</p>
        <p>$0.00000001948</p>
        <p>Price</p>
        <p>$60,000</p>
        <p>tvl</p>
        <div className="tvl">
          <div className="solana">
            <img src={Solana} alt="" />
          </div>
          <div className="ethereum">
            <img src={Ethereum} alt="" />
          </div>
          <div className="binance">
            <img src={Binance} alt="" />
          </div>
        </div>
        <p>popular pairs</p>
      </div>
      <div className="card mx-auto flex justify-center">
        <div className="outside-circle">
          <div className="inside-circle flex justify-center items-center">
            <div className="icon-circle flex justify-center items-center">
              <img src={Solana} alt="Bitcoin" />
            </div>
          </div>
        </div>
      </div>
      <div className="card mx-auto flex justify-center">
        <div className="outside-circle">
          <div className="inside-circle flex justify-center items-center">
            <div className="icon-circle flex justify-center items-center">
              <img src={Ethereum} alt="Bitcoin" />
            </div>
          </div>
        </div>
      </div>
      <div className="card mx-auto flex justify-center">
        <div className="outside-circle">
          <div className="inside-circle flex justify-center items-center">
            <div className="icon-circle flex justify-center items-center">
              <img src={Binance} alt="Bitcoin" />
            </div>
          </div>
        </div>
      </div>
      <div className="card mx-auto flex justify-center">
        <div className="outside-circle">
          <div className="inside-circle flex justify-center items-center">
            <div className="icon-circle flex justify-center items-center">
              <img src={SHIBA} alt="Bitcoin" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TrendingAssets;

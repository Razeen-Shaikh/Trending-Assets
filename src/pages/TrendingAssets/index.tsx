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
    </div>
  );
};

export default TrendingAssets;

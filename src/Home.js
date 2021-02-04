import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__conainer">
        <img
          className="home__image"
          src="https://i.gadgets360cdn.com/large/best_movies_on_amazon_prime_august_2020_1597408336879.jpg?downsize=950:*&output-quality=80&output-format=webp"
          alt=""
        />
        <div className="home__row">
          <Product
            id={213216516}
            title="OnePlus Nord 5G (Gray Ash, 12GB RAM, 256GB Storage)"
            price={29999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71-8y4L6jKL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={984984656}
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate"
            price={2403.0}
            image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={156151651}
            title="Adidas Men's Atlus M Running Shoes"
            price={2094.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81fKxpT0pCL._UL1500_.jpg"
            rating={3}
          />
          <Product
            id={465165133}
            title="Amazon Brand - Solimo Wall Sticker for Living Room(Ride through Nature, ideal size on wall: 140 cm x 100 cm),Multicolour"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZRX1MDF9L._SL1200_.jpg"
            rating={5}
          />
          <Product
            id={321321321}
            title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette (Silent Movement, Black Frame)"
            price={599.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81XEPquUw3L._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={498485163}
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={153900.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

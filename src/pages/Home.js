import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";
export const Home = () => {
  useTitle("Home");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
      colors: ["Black", "White", "Red"],
      type:["wireless","wire"]
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
      colors: ["Black", "White", "Red"],
      type:["wireless","wire"]
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: "/assets/images/1003.png",
      colors: ["Black", "White", "Red"],
      type:["wireless","wire"]
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: "/assets/images/1004.png",
      colors: ["Black", "White", "Red"],
      type:["wireless","wire"]
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: "/assets/images/1005.png",
      colors: ["Black", "White", "Red"],
      type:["wireless","wire"]
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "/assets/images/1006.png",
      colors: ["Black", "White", "Red"],
      type:["wireless","wire"]
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

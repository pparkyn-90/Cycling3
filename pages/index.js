import Head from 'next/head';

const products = [
  {
    name: "Shimano RC3 Shoes",
    retailer: "Amazon",
    price: 89.99,
    shipping: 0,
    delivery: "1–2 days",
    image: "https://m.media-amazon.com/images/I/71v0TTnTw0L._AC_SL1500_.jpg",
    link: "https://www.amazon.co.uk/dp/B08L5VYZX7?tag=youraffiliatetag"
  },
  {
    name: "dhb Dorica MTB Shoe",
    retailer: "Wiggle",
    price: 59.99,
    shipping: 2.99,
    delivery: "2–4 days",
    image: "https://www.wigglestatic.com/product-media/100464387/dhb-dorica-mtb-shoes.jpg",
    link: "https://www.wiggle.co.uk/?ref=yourtag"
  },
  {
    name: "Van Rysel RoadR 500",
    retailer: "Decathlon",
    price: 69.99,
    shipping: 3.99,
    delivery: "3–5 days",
    image: "https://contents.mediadecathlon.com/p2153699/k$af1261cfb01c1185e06bde2972e07f96/roadr-500.jpg",
    link: "https://www.decathlon.co.uk/?ref=yourtag"
  }
];

export default function Home() {
  const sorted = products.sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping));

  return (
    <>
      <Head>
        <title>Cycling Deals</title>
      </Head>
      <main style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>Best Deals on Cycling Shoes</h1>
        <div style={{ display: "grid", gap: "2rem" }}>
          {sorted.map((product, i) => (
            <div key={i} style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: "200px" }} />
              <h2>{product.name}</h2>
              <p><strong>Retailer:</strong> {product.retailer}</p>
              <p><strong>Total Price:</strong> £{(product.price + product.shipping).toFixed(2)}</p>
              <p><strong>Delivery:</strong> {product.delivery}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: "0.5rem 1rem" }}>Buy Now</button>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
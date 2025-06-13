import Head from 'next/head'

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
        <title>Cycling Deals UK</title>
        <meta name="description" content="Compare the best cycling gear prices across Amazon and more" />
      </Head>
      <main className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Best Cycling Shoe Deals (UK)</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sorted.map((product, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-5 transition hover:shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-1">Retailer: <strong>{product.retailer}</strong></p>
              <p className="text-gray-700 mt-1">Delivery: {product.delivery}</p>
              <p className="mt-2 text-lg font-bold text-green-600">£{(product.price + product.shipping).toFixed(2)}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Buy Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
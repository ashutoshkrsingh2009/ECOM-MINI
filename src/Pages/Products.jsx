import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Card from "../Components/Card";

const api = "https://dummyjson.com/products";

const Products = ({ cart, setCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(api);
        const apiData = await res.json();
        setData(apiData.products);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-pink-50 via-rose-100 to-fuchsia-200">
        <Loader />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-pink-50 via-rose-100 to-fuchsia-200 py-12">


      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">

        <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600 shadow-md">
          🌸 Our Collection
        </span>

        <h1 className="mt-5 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Trending
          <span className="bg-linear-to-r from-pink-500 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
            {" "}
            Products
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Discover our premium collection of fashion, electronics,
          accessories and much more with the best quality and exclusive prices.
        </p>

      </div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {data.map((item) => (
            <Card
              key={item.id}
              info={item}
              cart={cart}
              setCart={setCart}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Products;
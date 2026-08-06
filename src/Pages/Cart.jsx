const Cart = ({ cart, setCart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.q, 0);

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.q,
    0
  );

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, q: item.q + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, q: item.q - 1 } : item
        )
        .filter((item) => item.q > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  if (cart.length === 0) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center bg-linear-to-br from-pink-50 via-rose-100 to-fuchsia-200 px-4 text-center">
        <h1 className="text-3xl font-bold text-pink-700 sm:text-4xl">
          🛒 Your Cart is Empty
        </h1>

        <p className="mt-3 text-pink-600">
          Add some products to continue shopping.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-pink-50 via-rose-100 to-fuchsia-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-pink-100 px-5 py-2 font-semibold text-pink-600 shadow">
            🛍 Your Shopping Cart
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
            Order
            <span className="bg-linear-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
              {" "}
              Summary
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">


          <div className="space-y-6 lg:col-span-2">
            {cart.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-3xl border border-pink-200 bg-white/90 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-pink-300 sm:flex-row"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="mx-auto h-32 w-32 rounded-2xl object-cover sm:h-36 sm:w-36"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-2xl font-bold text-pink-600">
                      ${item.price}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex w-fit overflow-hidden rounded-xl border border-pink-300">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-pink-100 px-4 py-2 text-xl text-pink-700 hover:bg-pink-200"
                      >
                        −
                      </button>

                      <span className="border-x border-pink-300 px-5 py-2 font-bold">
                        {item.q}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-pink-100 px-4 py-2 text-xl text-pink-700 hover:bg-pink-200"
                      >
                        +
                      </button>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Subtotal
                      </p>

                      <p className="text-xl font-bold text-pink-600">
                        ${(item.price * item.q).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="w-full rounded-xl bg-linear-to-r from-red-500 to-pink-500 px-5 py-3 font-semibold text-white transition hover:scale-105 sm:h-fit sm:w-auto"
                >
                  Remove
                </button>
              </article>
            ))}
          </div>


          <div className="h-fit rounded-3xl border border-pink-200 bg-white/90 p-6 shadow-xl backdrop-blur lg:sticky lg:top-24">

            <h2 className="text-2xl font-bold text-pink-700">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between">
              <span>Total Products</span>
              <span>{cart.length}</span>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="mt-4 flex justify-between text-lg font-semibold">
              <span>Grand Total</span>

              <span className="text-2xl font-bold text-pink-600">
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            <button className="mt-8 w-full rounded-xl bg-linear-to-r from-pink-500 via-rose-500 to-fuchsia-600 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-pink-400">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-linear-to-br from-pink-50 via-rose-100 to-fuchsia-200">


      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-pink-300 opacity-30 blur-3xl"></div>

      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-rose-300 opacity-30 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-300 opacity-30 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-12 lg:grid-cols-2">


        <div className="text-center lg:text-left">

          <span className="inline-flex items-center rounded-full border border-pink-300 bg-white px-5 py-2 text-sm font-semibold text-pink-600 shadow-lg">
            🌸 New Collection 2026
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover Your
            <span className="bg-linear-to-r from-pink-500 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
              {" "}
              Perfect{" "}
            </span>
            Shopping Experience
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-gray-700 sm:text-lg lg:mx-0">
            Shop premium fashion, electronics, accessories and thousands of
            trending products with secure payments, lightning fast delivery,
            exclusive offers and premium quality products.
          </p>


          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-start">

            <Link
              to="/products"
              className="rounded-2xl bg-linear-to-r from-pink-500 to-rose-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-pink-400"
            >
              🛍 Shop Now
            </Link>

            <Link
              to="/products"
              className="rounded-2xl border-2 border-pink-300 bg-white px-8 py-4 font-semibold text-pink-600 shadow-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-pink-300"
            >
              Explore
            </Link>

          </div>


          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="rounded-3xl border border-pink-200 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-pink-300">
              <h2 className="text-3xl font-bold text-pink-600">
                10K+
              </h2>

              <p className="mt-2 text-gray-600">
                Happy Customers
              </p>
            </div>

            <div className="rounded-3xl border border-pink-200 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-pink-300">
              <h2 className="text-3xl font-bold text-rose-600">
                500+
              </h2>

              <p className="mt-2 text-gray-600">
                Premium Products
              </p>
            </div>

            <div className="rounded-3xl border border-pink-200 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-pink-300">
              <h2 className="text-3xl font-bold text-fuchsia-600">
                24/7
              </h2>

              <p className="mt-2 text-gray-600">
                Customer Support
              </p>
            </div>

          </div>

        </div>


        <div className="relative flex items-center justify-center">

  <div className="absolute `h-105` `w-105` rounded-full bg-pink-300/40 blur-3xl"></div>

  <img
    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
    alt="Main Product"
    className="relative z-10 w-full max-w-sm rounded-[35px] border-4 border-white shadow-[0_30px_70px_rgba(236,72,153,0.35)] transition duration-500 hover:scale-105"
  />

  <div className="absolute left-0 top-4 hidden rounded-3xl bg-white p-3 shadow-2xl transition hover:-translate-y-2 lg:block">
    <img
      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400"
      className="h-28 w-28 rounded-2xl object-cover"
      alt=""
    />
    <p className="mt-2 text-center font-semibold text-pink-600">
      Fashion
    </p>
  </div>

  <div className="absolute -right-6 top-8 hidden rounded-3xl bg-white p-3 shadow-2xl transition hover:-translate-y-2 lg:block">
    <img
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
      className="h-28 w-28 rounded-2xl object-cover"
      alt=""
    />
    <p className="mt-2 text-center font-semibold text-pink-600">
      Shoes
    </p>
  </div>

  <div className="absolute -left-10 bottom-8 hidden rounded-3xl bg-white p-3 shadow-2xl transition hover:-translate-y-2 lg:block">
    <img
      src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400"
      className="h-28 w-28 rounded-2xl object-cover"
      alt=""
    />
    <p className="mt-2 text-center font-semibold text-pink-600">
      Perfume
    </p>
  </div>

  <div className="absolute -right-8 bottom-10 hidden rounded-3xl bg-white p-3 shadow-2xl transition hover:-translate-y-2 lg:block">
    <img
      src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
      className="h-28 w-28 rounded-2xl object-cover"
      alt=""
    />
    <p className="mt-2 text-center font-semibold text-pink-600">
      Mobiles
    </p>
  </div>

  <div className="absolute left-28 -top-12 hidden rounded-3xl bg-white p-3 shadow-2xl transition hover:-translate-y-2 xl:block">
    <img
      src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400"
      className="h-24 w-24 rounded-2xl object-cover"
      alt=""
    />
    <p className="mt-2 text-center text-sm font-semibold text-pink-600">
      Beauty
    </p>
  </div>
 </div>

      </div>
          <footer className="border-t border-white/20 bg-linear-to-br from-pink-50 via-rose-100 to-fuchsia-200 py-5">
      <p className="text-center text-sm font-semibold tracking-wide text-black">
        © 2026 AshAn • Made with ❤️
      </p>
    </footer>
    </section>
  );
};

export default Landing;
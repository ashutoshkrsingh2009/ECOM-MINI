import toast from "react-hot-toast";

const Card = ({ info, cart, setCart }) => {
  const { title, description, price, rating, images } = info;

  const addToCart = () => {
    const existingItem = cart.find((item) => item.id === info.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === info.id
          ? { ...item, q: item.q + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...info,
          q: 1,
        },
      ]);
    }

    toast.success(`${title} added to cart`);
  };

  return (
    <article
      className="
        mx-auto
        w-full
        max-w-sm
        overflow-hidden
        rounded-3xl
        border
        border-pink-200
        bg-white/80
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-pink-300
      "
    >
      <div className="overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="h-52 w-full object-cover transition-transform duration-500 hover:scale-110 sm:h-56 md:h-60"
        />
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        <h2 className="line-clamp-1 text-lg font-bold text-gray-800 sm:text-xl">
          {title}
        </h2>

        <p className="text-sm leading-6 text-gray-500">
          {description.length > 90
            ? description.slice(0, 90) + "..."
            : description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600 sm:text-2xl">
            ${price}
          </span>

          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 sm:text-sm">
            ⭐ {rating}
          </span>
        </div>

        <button
          onClick={addToCart}
          className="
            mt-2
            w-full
            rounded-xl
            bg-gradient-to-r
            from-pink-500
            via-rose-500
            to-fuchsia-500
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-pink-300
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-xl
            hover:shadow-pink-400
            active:scale-95
            sm:text-base
          "
        >
          🛍 Add To Cart
        </button>
      </div>
    </article>
  );
};

export default Card;
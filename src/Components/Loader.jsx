const Loader = () => {
  return (
    <div className="fixed inset-0 `z-9999` flex items-center justify-center bg-linear-to-br from-pink-50 via-white to-rose-100">
      <div className="flex flex-col items-center">

        <div className="relative">
          <div className="absolute inset-0 h-28 w-28 rounded-full border-4 border-pink-200 border-t-pink-500 animate-spin"></div>

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-2xl shadow-pink-300/40">
            <img
              src="/aaa.png"
              alt="AshAn Shop"
              className="h-20 w-20 object-contain animate-pulse"
            />
          </div>
        </div>

        <h2 className="mt-6 text-3xl font-extrabold bg-linear-to-r from-pink-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
          AshAn Shop
        </h2>

        <div className="mt-3 flex items-center gap-2">
          <p className="font-medium text-pink-700">
            Shopping with Love
          </p>

          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-bounce"></span>
            <span
              className="h-2 w-2 rounded-full bg-fuchsia-500 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="h-2 w-2 rounded-full bg-rose-500 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
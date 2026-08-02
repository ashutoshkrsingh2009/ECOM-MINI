const Profile = () => {
  const user = {
    name: "Ashutosh Kr Singh",
    email: "aksako@09062022.com",
    phone: "+91 629597000",
    address: "Sanyasi Asthan, Kulti",
    orders: 18,
    wishlist: 12,
    cart: 4,
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-fuchsia-200 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}

        <div className="mb-10 text-center">
          <span className="rounded-full bg-pink-100 px-5 py-2 font-semibold text-pink-600 shadow">
            👤 My Profile
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
            Welcome
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
              {" "}
              Back
            </span>
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Left Card */}

          <div className="rounded-3xl border border-pink-200 bg-white/90 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center">

              <img
                src="https://ui-avatars.com/api/?name=Ashutosh+Kr+Singh&background=ec4899&color=fff&size=256"
                alt="Profile"
                className="h-32 w-32 rounded-full border-4 border-pink-300 shadow-lg"
              />

              <h2 className="mt-5 text-2xl font-bold text-gray-800">
                {user.name}
              </h2>

              <p className="mt-1 text-gray-500 text-center">
                {user.email}
              </p>

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-pink-400">
                Edit Profile
              </button>

            </div>
          </div>

          {/* Right Side */}

          <div className="space-y-6 md:col-span-2">

            {/* Personal Info */}

            <div className="rounded-3xl border border-pink-200 bg-white/90 p-6 shadow-xl backdrop-blur">

              <h3 className="mb-6 text-2xl font-bold text-pink-600">
                Personal Information
              </h3>

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <p className="text-sm text-gray-500">
                    Full Name
                  </p>
                  <p className="font-semibold text-gray-800">
                    {user.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>
                  <p className="font-semibold text-gray-800">
                    {user.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>
                  <p className="font-semibold text-gray-800">
                    {user.phone}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Address
                  </p>
                  <p className="font-semibold text-gray-800">
                    {user.address}
                  </p>
                </div>

              </div>
            </div>

            {/* Stats */}

            <div className="grid gap-5 sm:grid-cols-3">

              <div className="rounded-3xl border border-pink-200 bg-white/90 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-pink-300">
                <h2 className="text-4xl font-bold text-pink-600">
                  {user.orders}
                </h2>
                <p className="mt-2 text-gray-500">
                  Orders
                </p>
              </div>

              <div className="rounded-3xl border border-pink-200 bg-white/90 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-pink-300">
                <h2 className="text-4xl font-bold text-pink-600">
                  {user.wishlist}
                </h2>
                <p className="mt-2 text-gray-500">
                  Wishlist
                </p>
              </div>

              <div className="rounded-3xl border border-pink-200 bg-white/90 p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-pink-300">
                <h2 className="text-4xl font-bold text-pink-600">
                  {user.cart}
                </h2>
                <p className="mt-2 text-gray-500">
                  Cart Items
                </p>
              </div>

            </div>

            {/* Action Buttons */}

            <div className="rounded-3xl border border-pink-200 bg-white/90 p-6 shadow-xl">

              <div className="flex flex-wrap gap-4">

                <button className="rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                  View Orders
                </button>

                <button className="rounded-xl border-2 border-pink-500 px-6 py-3 font-semibold text-pink-600 transition hover:bg-pink-100">
                  Manage Address
                </button>

                <button className="rounded-xl border-2 border-red-500 px-6 py-3 font-semibold text-red-500 transition hover:bg-red-50">
                  Logout
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;
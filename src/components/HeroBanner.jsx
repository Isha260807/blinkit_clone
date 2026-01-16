import bannerFruits from "../assets/banner-fruits.png";

const HeroBanner = () => {
  const handleScroll = () => {
    document
      .getElementById("products-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-4 mt-4">
      <div className="bg-gradient-to-r from-green-700 to-green-400 rounded-2xl p-8 flex items-center justify-between">

        {/* TEXT */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-3">
            Stock up on daily essentials
          </h1>
          <p className="text-lg mb-5">
            Get farm-fresh goodness & a range of exotic fruits, vegetables,
            eggs & more
          </p>

          <button
            onClick={handleScroll}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Shop Now
          </button>
        </div>

        {/* IMAGE */}
        <img
          src={bannerFruits}
          alt="Fruits Banner"
          className="hidden md:block h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroBanner;

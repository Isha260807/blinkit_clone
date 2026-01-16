const PromoCard = ({ bgColor, title, subtitle, buttonText, image }) => {
  return (
    <div
      className={`${bgColor} rounded-2xl p-6 flex justify-between items-center overflow-hidden hover:scale-[1.02] transition`}
    >
      {/* Left Content */}
      <div className="max-w-[60%]">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-4 opacity-90">{subtitle}</p>

        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
          {buttonText}
        </button>
      </div>

      {/* Right Image */}
      <img
        src={image}
        alt={title}
        className="h-28 object-contain"
        loading="lazy"
      />
    </div>
  );
};

export default PromoCard;

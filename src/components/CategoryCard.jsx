const CategoryCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="bg-blue-50 rounded-xl p-4 w-28 h-28 flex items-center justify-center group-hover:scale-105 transition">
        <img
          src={image}
          alt={title}
          className="h-20 object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-sm mt-2 text-center font-medium">{title}</p>
    </div>
  );
};

export default CategoryCard;

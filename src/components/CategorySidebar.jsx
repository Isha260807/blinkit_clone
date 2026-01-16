const categories = [
  "Fresh Vegetables",
  "Fresh Fruits",
  "Exotics",
  "Seasonal",
  "Leafy",
  "Organic",
];

const CategorySidebar = () => {
  return (
    <div className="w-48 hidden md:block border-r">
      {categories.map((cat, i) => (
        <div
          key={i}
          className={`p-4 cursor-pointer ${
            i === 0
              ? "border-l-4 border-green-600 bg-green-50 font-semibold"
              : "text-gray-600"
          }`}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;

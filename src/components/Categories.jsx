import { categories } from "../data/categories";

const Categories = () => {
  return (
    <div className="w-full">
      <div
        className="
          flex gap-3 
          overflow-x-auto 
          p-4 
          scrollbar-hide 
          snap-x 
          snap-mandatory
        "
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            className="
              min-w-[90px] sm:min-w-[120px] 
              bg-green-100 
              text-center 
              p-3 
              sm:p-4 
              rounded-lg 
              cursor-pointer 
              hover:bg-green-200 
              transition 
              snap-start 
              text-xs sm:text-sm 
              shadow-sm 
              active:scale-95
            "
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

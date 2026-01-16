import { useRef } from "react";
import ProductCard from "./ProductCard";

const HorizontalSection = ({ title, products }) => {
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="px-8 mt-10 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-green-600 cursor-pointer font-semibold">
          see all
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-xl"
      >
        ➜
      </button>
    </div>
  );
};

export default HorizontalSection;

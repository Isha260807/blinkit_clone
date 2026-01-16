import { vegetables } from "../data/vegetables";
import ProductCard from "./ProductCard";

const ProductRow = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {vegetables.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductRow;

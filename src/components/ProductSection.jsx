import CategorySidebar from "./CategorySidebar";
import ProductRow from "./ProductRow";

const ProductSection = () => {
  return (
    <div
      id="products-section"
      className="flex px-4 mt-8 gap-4"
    >
      <CategorySidebar />

      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">
          Stock up on daily essentials
        </h2>
        <ProductRow />
      </div>
    </div>
  );
};

export default ProductSection;

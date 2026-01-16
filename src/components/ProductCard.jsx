import { useCart } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="min-w-[190px] bg-white border rounded-xl p-3">
      <img
        src={item.image}
        alt={item.title}
        className="h-32 mx-auto object-contain"
      />

      <p className="text-xs mt-2 text-gray-500">⏱ 11 MINS</p>

      <h3 className="text-sm font-semibold mt-1 line-clamp-2">
        {item.title}
      </h3>

      <p className="text-xs text-gray-500">{item.weight}</p>

      <div className="flex items-center justify-between mt-3">
        <span className="font-bold">₹{item.price}</span>

        <button
          onClick={() => addToCart(item)}
          className="border border-green-600 text-green-600 px-4 py-1 rounded-md font-semibold hover:bg-green-50"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

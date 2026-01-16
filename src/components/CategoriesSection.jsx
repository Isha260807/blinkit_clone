import CategoryCard from "./CategoryCard";

// images
import paan from "../assets/paan.png";
import dairy from "../assets/dairy.png";
import fruits from "../assets/banner-fruits.png";
import drinks from "../assets/drinks.png";
import snacks from "../assets/snacks.png";
import breakfast from "../assets/breakfast.png";
import sweets from "../assets/sweets.png";
import bakery from "../assets/bakery.png";
import tea from "../assets/tea.png";
import atta from "../assets/atta.png";

const categories = [
  { title: "Paan Corner", image: paan },
  { title: "Dairy, Bread & Eggs", image: dairy },
  { title: "Fruits & Vegetables", image: fruits },
  { title: "Cold Drinks & Juices", image: drinks },
  { title: "Snacks & Munchies", image: snacks },
  { title: "Breakfast & Instant Food", image: breakfast },
  { title: "Sweet Tooth", image: sweets },
  { title: "Bakery & Biscuits", image: bakery },
  { title: "Tea, Coffee & Milk Drinks", image: tea },
  { title: "Atta, Rice & Dal", image: atta },
];

const CategoriesSection = () => {
  return (
    <div className="px-4 mt-8">
      <div
        className="
          grid 
          grid-cols-3 
          sm:grid-cols-4 
          md:grid-cols-6 
          lg:grid-cols-8 
          xl:grid-cols-10
          gap-4 
          sm:gap-6
        "
      >
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiThreadsFill } from "react-icons/ri";

const usefulLinks = [
  "Blog",
  "Privacy",
  "Terms",
  "FAQs",
  "Security",
  "Contact",
  "Partner",
  "Franchise",
  "Seller",
  "Warehouse",
  "Deliver",
  "Resources",
  "Recipes",
  "Bistro",
  "District",
];

const categories1 = [
  "Vegetables & Fruits",
  "Cold Drinks & Juices",
  "Bakery & Biscuits",
  "Dry Fruits, Masala & Oil",
  "Paan Corner",
  "Pharma & Wellness",
  "Personal Care",
  "Kitchen & Dining",
  "Stationery Needs",
  "Print Store",
];

const categories2 = [
  "Dairy & Breakfast",
  "Instant & Frozen Food",
  "Sweet Tooth",
  "Sauces & Spreads",
  "Organic & Premium",
  "Cleaning Essentials",
  "Pet Care",
  "Fashion & Accessories",
  "Books",
  "E-Gift Cards",
];

const categories3 = [
  "Munchies",
  "Tea, Coffee & Milk Drinks",
  "Atta, Rice & Dal",
  "Chicken, Meat & Fish",
  "Baby Care",
  "Home Furnishing & Decor",
  "Beauty & Cosmetics",
  "Electronics & Electricals",
  "Toys & Games",
  "Rakhi Gifts",
];

const Footer = () => {
  return (
    <footer className="bg-white mt-16 px-6 lg:px-20 py-10 border-t">
      
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-700">
            {usefulLinks.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Categories 1 */}
        <div>
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            Categories 
            <span className="text-green-600 text-sm cursor-pointer hover:underline">
              see all
            </span>
          </h3>
          <ul className="space-y-2 text-gray-700">
            {categories1.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Categories 2 */}
        <div>
          <h3 className="invisible">hidden title for alignment</h3>
          <ul className="space-y-2 text-gray-700 mt-2 lg:mt-6">
            {categories2.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Categories 3 */}
        <div>
          <h3 className="invisible">hidden title for alignment</h3>
          <ul className="space-y-2 text-gray-700 mt-2 lg:mt-6">
            {categories3.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          © Blink Commerce Private Limited, 2016–2026
        </p>

        {/* App Store Buttons */}
        <div className="flex gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
            className="h-10 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_2022_logo.svg"
            className="h-10 cursor-pointer"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <FaFacebookF size={18} />
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <FaXTwitter size={18} />
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <FaInstagram size={20} />
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <FaLinkedinIn size={20} />
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <RiThreadsFill size={20} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

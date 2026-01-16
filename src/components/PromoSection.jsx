import PromoCard from "./PromoCard";

// images
import pharmacyImg from "../assets/pharmacy.png";
import petCareImg from "../assets/pet-care.png";
import babyCareImg from "../assets/baby-care.png";

const PromoSection = () => {
  return (
    <div className="px-4 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <PromoCard
          bgColor="bg-teal-500 text-white"
          title="Pharmacy at your doorstep!"
          subtitle="Cough syrups, pain relief sprays & more"
          buttonText="Order Now"
          image={pharmacyImg}
        />

        <PromoCard
          bgColor="bg-yellow-400 text-black"
          title="Pet care supplies at your door"
          subtitle="Food, treats, toys & more"
          buttonText="Order Now"
          image={petCareImg}
        />

        <PromoCard
          bgColor="bg-slate-200 text-black"
          title="No time for a diaper run?"
          subtitle="Get baby care essentials"
          buttonText="Order Now"
          image={babyCareImg}
        />

      </div>
    </div>
  );
};

export default PromoSection;

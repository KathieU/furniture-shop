import chairImage from "../../assets/productImages/chair.png";
import armChair from "../../assets/productImages/armChair.png";
import brownSofa from "../../assets/productImages/brownSofa.png";
import chair2 from "../../assets/productImages/chair2.png";
import diningTableSet from "../../assets/productImages/diningTableSet.png";
import furnitureTable1 from "../../assets/productImages/furnitureTable1.png";
import greenSofa from "../../assets/productImages/greenSofa.png";
import highTopChair from "../../assets/productImages/highTopChair.png";
import lights from "../../assets/productImages/lights.png";

const products = [
  {
    id: 1,
    name: "Wooden Chair with leather",
    price: "₦32,000",
    image: chairImage,
  },
  {
    id: 2,
    name: "Table book shelf",
    price: "₦112,000",
    discount: "-10%",
    discountPrice: "₦126,000",
    image: furnitureTable1,
  },
  {
    id: 3,
    name: "Gold Ceiling Lights",
    price: "₦98,000",
    image: lights,
    discount: "-10%",
    discountPrice: "₦102,000",
  },
  {
    id: 4,
    name: "Ash local chair",
    price: "₦22,000",
    image: chair2,
    discount: "-10%",
    discountPrice: "₦42,000",
  },
  {
    id: 5,
    name: "High Top Kitchen Stool",
    price: "₦15,000",
    image: highTopChair,
  },
  {
    id: 6,
    name: "Brown Leather Sofa",
    price: "₦112,000",
    image: brownSofa,
    discount: "-10%",
    discountPrice: "₦126,000",
  },
  {
    id: 7,
    name: "Swedish Armchair",
    price: "₦102,000",
    image: armChair,
  },
  {
    id: 8,
    name: "Dining Table Setting",
    price: "₦198,000",
    image: diningTableSet,
    discount: "-10%",
    discountPrice: "₦202,000",
  },
  {
    id: 9,
    name: "Green Modern Day Sofa",
    price: "₦112,000",
    image: greenSofa,
  },
];

export default products;

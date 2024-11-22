import React from "react";
import CategoryCard from "../../components/home/CategoryCard";
import { Link } from "react-router-dom";

const categoryProductData = [
  {
    title: "Rice",
    image: "/images/product-category/rice.jpg",
    compressedImg: "/images/product-category/rice-compressed.jgp",
  },
  {
    title: "Wheat",
    image: "/images/product-category/wheat.jpg",
    compressedImg: "/images/product-category/wheat-compressed.jpg",
  },
  {
    title: "Nuts",
    image: "/images/product-category/nuts.webp",
    compressedImg: "/images/product-category/nuts-compressed.webp",
  },
  {
    title: "Sugarcane",
    image: "/images/product-category/sugar.jpeg",
    compressedImg: "/images/product-category/sugar-compressed.jgp",
  },
  {
    title: "Spices",
    image: "/images/product-category/spice.jpg",
    compressedImg: "/images/product-category/spice-compressed.jpgp",
  },
  {
    title: "Fruits",
    image: "/images/product-category/fruits.webp",
    compressedImg: "/images/product-category/fruits-compressed.webp",
  },
  {
    title: "Vegetables",
    image: "/images/product-category/vegetables.webp",
    compressedImg: "/images/product-category/vegetables-compressed.webp",
  },
  {
    title: "Pulses",
    image: "/images/product-category/pulses.jpg",
    compressedImg: "/images/product-category/pulses-compressed.jpg",
  },
];

function Category() {
  return (
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categoryProductData.map((item, index) => (
        <Link to={`/category/${item.title.toLowerCase()}`} key={index}>
          <CategoryCard title={item.title} image={item.image} compressedImg={item.compressedImg}/>
        </Link>
      ))}
    </div>
  );
}

export default Category;

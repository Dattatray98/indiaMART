import ProductContainer from "./ProductContainers/ProductContainer";
import Navbar from "./Navbar/Navbar";
import ProdcutSlide from "./ProductContainers/ProdcutSlide";
import ProductContainer1 from "./ProductContainers/ProductContainer1";

const productData1 = [
  { title: 'Medicine A', image: '/med1.jpg', description: 'Pain relief' },
  { title: 'Medicine B', image: '/med2.jpg', description: 'Fever reducer' },
  // ...up to 6
];

const productData2 = [
  { title: 'Syrup X', image: '/syrup.jpg', description: 'Cough relief' },
  { title: 'Tablet Y', image: '/tablet.jpg', description: 'Cold relief' },
  // ...different data
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <ProductContainer1 />
      <ProdcutSlide />
      <ProductContainer heading="Pharmaceuticals" cards={productData1} />
      <ProductContainer heading="Over-the-Counter Products" cards={productData2} />
      {/* Add more containers as needed with different data */}
    </>
  );
};

export default HomePage;

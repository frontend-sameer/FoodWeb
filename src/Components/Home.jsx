import Delevery from "./Delevery";
import Hero from "./Hero";
import ItemSlider from "./ItemSlider";

const Home = ({ handelcartCount }) => {
  return (
    <>
      <Hero />
      <Delevery />
      <ItemSlider handelcartCount={handelcartCount} />
    </>
  );
};
export default Home;

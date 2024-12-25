import ProductCard from "@/components/ProductCard";
import MainSlider from "@/components/MainSlider";
//import { UrunlerCardSlider } from "@/components/UrunlerCardSlider";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className=" flex flex-col gap-y-8">
      <MainSlider />
      <div className="w-[90%] mx-auto flex flex-wrap gap-y-7 justify-between mb-5">

      </div>

      <ProductList />

      <div className="w-full flex justify-center">
        {/* <UrunlerCardSlider/> */}
      </div>
    </div>
  );
}

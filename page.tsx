import Image from "next/image";
import Headerbar from "./components/Headerbar";
import HeroSection from "./components/HeroSection";
import Featureproducts from "./components/Featureproducts";
import Leatestproducts from "./components/Leatestproducts";
import Whatshopping from "./components/Whatshopping";
import Trendingproduct from "./components/Trendingproduct";
import Fiveproducts from "./components/Fiveproducts";
import DiscountSection from "./components/DiscountSection";
import Topcategories from "./components/Topcategories";
import Middle from "./components/Middle";
import Leatestblog from "./components/Leatestblog";
import Footer from "./components/Footer";





export default function Home() {
  return (
    
     <>
      <Headerbar/> 
      <HeroSection/> 
      <Featureproducts/> 
      <Leatestproducts/> 
      <Whatshopping/> 
      <Trendingproduct/> 
      <Fiveproducts/> 
      <DiscountSection/> 
      <Topcategories/> 
      <Middle/> 
      <Leatestblog/> 
      <Footer/> 
  
      </>
  );
}

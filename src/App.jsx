import Banner from "./components/Banner";
import OrderButton from "./components/OrderButton";
import ProductCard from "./components/ProductCard";
import SayHello from "./components/SayHello";
import WelcomeBanner from "./components/WelcomeBanner";


function App() {

  return (
    <>
      <SayHello />
      <ProductCard />
      <WelcomeBanner />
      <OrderButton />
      <Banner />
    </>
  )
}

export default App;

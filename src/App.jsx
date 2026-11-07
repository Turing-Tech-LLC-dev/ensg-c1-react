import AddTwo from "./components/AddTwo";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
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
      <Intro />
      <AddTwo />
    </>
  )
}

export default App;
